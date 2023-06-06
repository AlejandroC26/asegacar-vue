<template>
  <b-modal 
    :title="sTitle" 
    size="lg"
    v-model="valor" 
    body-bg-variant="bg-light"
    hide-footer
    @hidden="onClose">
    <b-row>
        <b-col
          v-for="(oComponent, key) in aComponents"
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
import FormNumber from "./Components/FormNumber.vue";
import FormPassword from "./Components/FormPassword.vue";
import FormSelect from "./Components/FormSelect.vue";
import FormDate from "./Components/FormDate.vue";
import FormTime from "./Components/FormTime.vue";
import FormFileImage from "./Components/FormFileImage.vue";
import FormLocalSelect from "./Components/FormLocalSelect.vue";
import axiosServices from '../../store/axiosServices';
export default {
  name: "FormularioView",
  props: {
    sTitle: {
      type: String,
      default: "",
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
    FormNumber,
    FormPassword,
    FormSelect,
    FormDate,
    FormTime,
    FormFileImage,
    FormLocalSelect
  },
  data() {
    return {
      valor: this.value,
      bShow: false,
      oFormField: {},
      oValorField: {},
    };
  },
  mounted(){
    this.onGetDataForm();
  },
  methods: {
    onGetDataForm() {
      if(this.bCreate === false && this.nIdItem) {
        axiosServices.onAxiosGet(`${this.sEndPoint}/${this.nIdItem}`).then(response => {
          this.oValorField = response.data.data;
        })
      } 
    },
    onClose() {
      this.$emit("close");
    },
    onSaveForm() {
      const formData = new FormData();

      for (let propiedad in this.oFormField) {
        if (this.oFormField.hasOwnProperty(propiedad)) {
          const valor = this.oFormField[propiedad];
          formData.append(propiedad, valor);
        }
      }
      axiosServices.onAxiosPostWithfile(this.sEndPoint, formData).then(response => {
        if(response.data.status === 'Error') {
          return console.log(response.data.errors)
        } else {
          if(response.status === 200) {
            //alert('registro exitoso');
            this.$emit('saveOK', true);
          } else {
            console.log(response)
          }
        }
        //console.log(response)
      })
    },
    onUpdateForm() {
      const formData = new FormData();

      for (let propiedad in this.oFormField) {
        if (this.oFormField.hasOwnProperty(propiedad)) {
          const valor = this.oFormField[propiedad];
          formData.append(propiedad, valor);
        }
      }
      axiosServices.onAxiosPostWithfile(`${this.sEndPoint}/${this.nIdItem}?_method=PUT`, formData).then(response => {
        if(response.status === 200) {
          //alert('actualizacion exitosa');
          this.$emit('saveOK', true);
        } else {
          console.log(response)
        }
      })
    },
    onGetValuesForm(index, data) {
      // If data size is set this is file
      if(data && data.size) {
        this.oFormField[index] = data;
      } else {
        this.oFormField[index] = (Array.isArray(data)) ? data : (typeof data == 'object') ? data.id : data
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