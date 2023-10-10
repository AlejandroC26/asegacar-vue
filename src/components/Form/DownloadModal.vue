<template>
  <b-modal 
    title="Descargar Formato" 
    size="lg"
    v-model="valor" 
    body-bg-variant="bg-light"
    hide-footer
    @hidden="onClose">
    <b-row class="gap">
        <b-col
          v-for="(oComponent, key) in aComponents"
          :lg="oComponent.nCol"
          :key="key"
        >
          <component 
            :is="oComponent.sComponent" 
            :sLabel="oComponent.sLabel"
            :sEndPoint="oComponent.sEndPoint" 
            :sKeyField="oComponent.sName"
            :options="oComponent.options"
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
        <b-button @click="onDownLoadFormat()" variant="primary" class="mt-3" block>Descargar</b-button>
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
import FormFileImage from "./Components/FormFileImage.vue";
import FormLocalSelect from "./Components/FormLocalSelect.vue";
import FormOptionalDate from "./Components/Specials/FormOptionalDate.vue";
import FormDepartmentCity from "./Components/Specials/FormDepartmentCity.vue";

import axiosServices from '../../store/axiosServices';

export default {
  name: "DownloadModal",
  props: {
    sTitle: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false
    },
    sFormatName: {
      type: String,
      default: ''
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
    FormFileImage,
    FormLocalSelect,
    FormDepartmentCity,
    FormOptionalDate,
  },
  data() {
    return {
      valor: this.value,
      bShow: false,
      oFormField: {},
      oValorField: {},
    };
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    async onDownLoadFormat(){
      const aResponse = await axiosServices.onAxiosPostToFile(`${this.sEndPoint}Format`, this.oFormField)
      if(aResponse.status === 200) {
        const url = window.URL.createObjectURL(new Blob([aResponse.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${this.sFormatName}.xlsx`);
        document.body.appendChild(link);
        link.click();
        this.$emit('saveOK', true);
      } else {
        console.log(aResponse)
      }
    },
    onGetValuesForm(index, data) {
      // If data size is set this is file
      if(Array.isArray(data)) return this.oFormField[index] = data;
      if(data && data.size) {
        this.oFormField[index] = data;
      } else {
        this.oFormField[index] = data
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