<template>
  <div>
    <h1>{{ sTitle }}</h1>
    <div class="info-card">
      <b-row class="my-2">
        <b-col sm="4">
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
        <b-col sm="2">
          <b-input-group size="md">
            <b-form-select
              v-model="perPage"
              :options="pageOptions"
              style="max-width: 150px"
              size="md"
            ></b-form-select>
          </b-input-group>
        </b-col>
        <b-col sm="2">
          <b-form-datepicker 
              v-model="sDate" 
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </b-col>
        <b-col lg="2" style="display: flex" class="justify-content-end">
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
    <DownloadModal
      v-model="bShowDownloadModal"
      :key="sDKey"
      :sEndPoint="sEndPoint"
      :aComponents="aDownloadComponents"
      :sFormatName="sFormatName"
      @close="onClose"
      @saveOK="onReloadItems"
    />
  </div>
</template>
<script>
import helpers from '../../store/helpers';
import translate from "../../store/translate"
import axiosServices from "../../store/axiosServices";
import Formulario from "../Form/Formulario.vue";
import DownloadModal from "../Form/DownloadModal.vue";
export default {
  name: "GridView",
  components: {
    Formulario,
    DownloadModal
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
    sFormatName: {
      type: String,
      default: ""
    },
    aComponents: {},
    aDownloadComponents: {}
  },
  data() {
    return {
      nKey: 0,
      sDKey: 'D0',
      bShowModal: false,
      bShowDownloadModal: false,
      sAction: "",
      sDate: "" ,
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
    this.sDate = helpers.onGetCurrentDate();
    this.onGetData();
  },
  methods: {
    onGetData(){
      const sEndPoint = `${this.sEndPoint}?date=${this.sDate}`;
      axiosServices.onAxiosGet(sEndPoint).then(res => {
        this.aItems = res.data;
        if(this.aItems.length > 0) {
          let fields = [];
          fields = [...fields, { key: 'actions', label: "", sortable: false }]
          let aHeaders = Object.keys(res.data[0]);
          aHeaders.forEach(sValue => {
            if(!sValue.includes('id_')) {
              let label = translate.getTranslation(sValue);
              let thStyle = '';
              if(label.length > 20) {
                thStyle = 'width: 200px; display: inline-block;';
              }
              fields = [
                ...fields, { key: sValue, label, sortable: false, thStyle }
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
      this.bShowDownloadModal = false;
    },
  },
  computed: {
    rows() {
      return this.aItems.length;
    },
  },
  watch: {
    sDate(newDate, oldDate) {
      if(oldDate) this.onGetData();
    }
  }
};
</script>