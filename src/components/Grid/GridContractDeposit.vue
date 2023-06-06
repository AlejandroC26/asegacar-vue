<template>
  <div>
    <h1>{{ sTitle }}</h1>
    <div class="info-card">
      <b-row class="my-2">
        <b-col lg="5">
          <b-input-group size="md">
            <b-form-input
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Clear</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-col>
        <b-col lg="3">
          <b-input-group size="md">
            <b-form-select
              v-model="perPage"
              :options="pageOptions"
              style="max-width: 150px"
              size="md"
            ></b-form-select>
          </b-input-group>
        </b-col>
        <b-col lg="4" style="display: flex" class="justify-content-end">
          <b-button @click="onShowModal('new')">NUEVO REGISTRO</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" style="overflow: auto">
          <b-table
            :key="nKey"
            :fields="aFields"
            :items="aItems"
            :per-page="perPage"
            :current-page="currentPage"
            :filter="filter"
            striped
            empty-filtered-text="No hay registros que coincidan con su solicitud"
            show-empty
            bordered
            borderless
            hover
          >
            <template #cell(actions)="data">
              <b-button-group>
                <b-button size="sm" variant="none" @click="onShowModal('edit', data.item.id)"><b-icon icon="pencil-fill"/></b-button>
                <b-button size="sm" variant="none" @click="onDelete(data.item.id)"><b-icon icon="trash-fill"/></b-button>
                <b-button size="sm" variant="none" @click="onShowPdf(data.item.id)"><b-icon icon="file-pdf-fill"/></b-button>
              </b-button-group>
            </template>
          </b-table>
        </b-col>
        <b-col lg="12 mt-3">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="right"
          ></b-pagination>
        </b-col>
      </b-row>
    </div>
    <b-modal 
      title="Descargar PDF" 
      size="lg"
      v-model="bShowPdf" 
      body-bg-variant="bg-light"
      hide-footer
    >
      <b-row>
        <div class="col-md-12 mb-3">
          <label>CÓDIGO DE FORMATO</label>
          <b-form-select
              v-model="sFormatCode"
              :options="aFormats"
          />
        </div>
        <div class="col-md-6">
          <b-form-checkbox v-model="bHideDate" name="check-button" switch>
            Ocultar fecha <b>({{ bHideDate ? "Si" : "No" }})</b>
          </b-form-checkbox>
        </div>
        <div class="col-md-6">
          <b-form-checkbox v-model="bHideSignature" name="check-button" switch>
            Ocultar firma <b>({{ bHideSignature ? "Si" : "No" }})</b>
          </b-form-checkbox>
        </div>
      </b-row>
      <b-row class="justify-content-end mt-3">
        <b-col lg="3">
          <b-button @click="onDownloadPDF" class="mt-3" block>Descargar Contrato <b-icon icon="file-pdf-fill"/></b-button>
        </b-col>
      </b-row>
    </b-modal>
    <Formulario
      v-model="bShowModal"
      :key="nKey"
      :sEndPoint="sEndPoint"
      :sTitle="sTitle"
      :sAction="sAction"
      :nIdItem="nIdItemEdit"
      :aComponents="aComponents"
      :bCreate="bCreate"
      @close="onClose"
      @saveOK="onReloadItems"
    />
  </div>
</template>
<script>
import translate from "../../store/translate.js"
import axiosServices from "../../store/axiosServices";
import Formulario from "../Form/FormularioFormData.vue";
export default {
  name: "GridView",
  components: {
    Formulario,
  },
  props: {
    sTitle: {
      type: String,
      default: "",
    },
    sEndPoint: {
      type: String,
      default: "",
    },
    aComponents: {},
  },
  data() {
    return {
      nKey: 0,
      nIdRow: 0,
      bShowModal: false,
      bShowPdf: false,
      // CONFIG
      bHideSignature: false,
      bHideDate: false,
      sFormatCode: '',
      aFormats: [],
      
      sAction: "",
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      currentPage: 1,
      filter: "",
      bCreate: false,
      nIdItemEdit: 0,
      aFields: [],
      aItems: [],
    };
  },
  mounted() {
    this.onGetData();
    this.onGetItems();
  },
  methods: {
    onDownloadPDF(){
      let oBody = {
        hide_signature: this.bHideSignature,
        hide_date: this.bHideDate,
        format_code: this.sFormatCode
      }
      if(!this.sFormatCode) 
        return alert('Selecciona un código para el formato');

      axiosServices.onAxiosPostToFile(`contractPDF/${this.nIdRow}`, oBody).then(aResponse => {
        const url = window.URL.createObjectURL(new Blob([aResponse.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Contrato-deposito-animales.pdf');
        document.body.appendChild(link);
        link.click();
        this.bShowPdf = false;
        this.bHideSignature = false;
        this.bHideDate = false;
      })
    },
    onGetItems() {
      axiosServices.onAxiosGet("sltFormatCodes").then(aItems => {
        let aNewOptions = [ { value: '', text: 'Selecciona una opción', disabled: true }, ];
        aItems.data.forEach(oItem => {
            aNewOptions = [...aNewOptions, { value: oItem.code, text: oItem.code }]
        });
        this.aFormats = aNewOptions;
      })
    },
    onGetData(){
      axiosServices.onAxiosGet(this.sEndPoint).then(res => {
        this.aItems = res.data;
        if(this.aItems.length > 0) {
          let fields = [];
          fields = [...fields, { key: 'actions', label: "", sortable: false }]
          let aHeaders = Object.keys(res.data[0]);
          aHeaders.forEach(sValue => {
            if(!sValue.includes('id_')) {
              let label = translate.getTranslation(sValue);
              fields = [
                ...fields, { key: sValue, label, sortable: true }
              ]
            }
          });
          this.aFields = fields;
          this.nKey += 1;
        }
      })
    },
    onDelete(nIdDel) {
      this.$swal({
        title: '¿Deseas borrar este registro?',
        text: 'Una vez eliminado el registro no podrás recuperar esta información',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#87bc24',
        cancelButtonColor: '#F9423A',
        confirmButtonText: '¡Si, Eliminálo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosServices.onAxiosDelete(`${this.sEndPoint}/${nIdDel}`).then(response => {
            if (response.status === 200) {
              this.$swal({
                icon: 'success',
                title: '¡Eliminado!',
                text: 'El registro ha sido eliminado',
                showConfirmButton: false,
                timer: 3000
              })
              this.onReloadItems()
            } else {
              this.$swal({
                icon: 'error',
                title: '¡Ha surgido un error!',
                text: 'Es probable que esta table se encuentre relacionada con otras, revisa la información e intente nuevamente.',
                confirmButtonColor: '#08a9d6'
              })
            }
          })
        }
      })
    },
    onReloadItems() {
      this.onClose();
      this.onGetData();
    },
    onShowPdf(nId) {
      this.nIdRow = nId;
      this.bShowPdf = true;
    },
    onShowModal(sAction, nIdItem) {
      this.nKey += 1;
      if (sAction == "edit") {
        this.nIdItemEdit = nIdItem;
        this.bCreate = false;
      } else {
        this.bCreate = true;
      }
      this.bShowModal = true;
    },
    onClose() {
      this.bShowModal = false;
    },
  },
  computed: {
    rows() {
      return this.aItems.length;
    },
  },
};
</script>