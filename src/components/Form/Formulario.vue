<template>
  <b-modal 
    :title="sTitle" 
    :size="sFormSize"
    v-model="valor" 
    body-bg-variant="bg-light"
    hide-footer
    @hidden="onClose">
    <b-row class="gap">
        <b-col
          v-for="(oComponent, key) in aChangeComponents"
          :lg="oComponent.nCol"
          :key="key"
        >
          <component 
            v-if="oComponent.sVisible == null || ((bCreate && oComponent.sVisible == 'create') || (!bCreate && oComponent.sVisible == 'edit'))"
            :is="oComponent.sComponent" 
            :sLabel="oComponent.sLabel"
            :sEndPoint="oComponent.sEndPoint" 
            :sKeyField="oComponent.sName"
            :options="oComponent.options"
            :aSubComponents="oComponent.aSubComponents"
            :oValorField="oValorField"
            @updateValor="onGetValuesForm(oComponent.sName, $event)"
          />
        </b-col>
    </b-row>
    <b-row class="justify-content-between">
      <b-col lg="3">
        <b-button @click="onClose" class="mt-3" block>Cancelar</b-button>
      </b-col>
      <b-col lg="4">
        <b-button v-if="bCreate" @click="onSaveForm()" variant="primary" class="mt-3" block>Registrar</b-button>
        <b-button v-else @click="onUpdateForm()" variant="primary" class="mt-3" block>Guardar</b-button>
      </b-col>
    </b-row>
  </b-modal>
</template>
<script>
import FormText from "./Components/FormText.vue";
import FormState from "./Components/FormState.vue";
import FormStateSiNo from "./Components/FormStateSiNo.vue";
import FormArea from "./Components/FormArea.vue";
import FormNumber from "./Components/FormNumber.vue";
import FormPassword from "./Components/FormPassword.vue";
import FormMultiSelect from "./Components/FormMultiSelect.vue";
import FormSelect from "./Components/FormSelect.vue";
import FormDate from "./Components/FormDate.vue";
import FormTime from "./Components/FormTime.vue";
import FormFile from "./Components/FormFile.vue";
import FormFileImage from "./Components/FormFileImage.vue";
import FormLocalSelect from "./Components/FormLocalSelect.vue";
import FormDualSelect from "./Components/FormDualSelect.vue";
import FormOptionalDate from "./Components/Specials/FormOptionalDate.vue";
import FormDepartmentCity from "./Components/Specials/FormDepartmentCity.vue";
import DailyPayrollTable from "./Components/Specials/DailyPayrollTable.vue";

import axiosServices from '../../store/axiosServices';

export default {
  name: "FormularioView",
  props: {
    sTitle: {
      type: String,
      default: "",
    },
    sFormSize: {
      type: String,
      default: "lg",
    },
    value: {
      type: Boolean,
      default: false
    },
    sAction: {
      type: String,
      default: "",
    },
    nIdItem: {
      type: Number
    },
    bCreate: {
      type: Boolean,
      default: false
    },
    sEndPoint: {
      type: String,
      default: ''
    },
    aComponents: {},
  },
  components: {
    FormText,
    FormArea,
    FormState,
    FormStateSiNo,
    FormNumber,
    FormPassword,
    FormSelect,
    FormMultiSelect,
    FormDate,
    FormTime,
    FormFile,
    FormFileImage,
    FormLocalSelect,
    FormDepartmentCity,
    FormOptionalDate,
    FormDualSelect,
    DailyPayrollTable
  },
  data() {
    return {
      valor: this.value,
      bShow: false,
      oFormField: {},
      oValorField: {},
      aChangeComponents: JSON.parse(JSON.stringify(this.aComponents)),
    };
  },
  mounted(){
    this.onGetDataForm();
  },
  methods: {
    async onGetDataForm() {
      if(this.bCreate === false && this.nIdItem) {
        const response = await axiosServices.onAxiosGet(`${this.sEndPoint}/${this.nIdItem}`)
        this.oValorField = response.data.data;
      } 
    },
    onClose() {
      this.$emit("close");
    },
    onSaveForm() {
      axiosServices.onAxiosPost(this.sEndPoint, this.oFormField).then(response => {
        if(response?.data.status === 'Error') {
          return console.log(response.data.errors)
        } else {
          if(response?.data.status === 'Success') {
            //alert('registro exitoso');
            console.log(response.data)
            this.$emit('saveOK', true);
          } else {
            console.log(response)
          }
        }
        //console.log(response)
      })
    },
    onUpdateForm() {
      axiosServices.onAxiosPut(`${this.sEndPoint}/${this.nIdItem}`, this.oFormField).then(response => {
        if(response.data.status === 'Success') {
          //alert('actualizacion exitosa');
          this.$emit('saveOK', true);
        } else {
          console.log(response)
        }
      })
    },
    onGetValuesForm(index, data) {
      // If data size is set this is file
      if(Array.isArray(data)) return this.oFormField[index] = data;
      if(data && data.size) {
        this.oFormField[index] = data;
      } else {
        this.oFormField[index] = (Array.isArray(data)) ? data : (typeof data == 'object') ? data.id : data
      }
      const oDepends = this.aChangeComponents.findIndex(component => component.sDependsOn === index);
      if(oDepends >= 0) {
        this.aChangeComponents[oDepends].sEndPoint = `${this.aComponents[oDepends].sEndPoint}/${data}`;
      }
    },
  },
  watch: {
    value() {
      this.valor = this.value
    }
  },
};
</script>
<style>
  .gap {
    gap: .5rem 0;
  }
</style>