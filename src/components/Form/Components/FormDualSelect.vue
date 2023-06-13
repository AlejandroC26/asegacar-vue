<template>
  <div class="row" style="gap: .5rem">
    <div class="col">
      <label>{{ sLabel.first }}</label>
      <b-form-select
        v-model="firstValor"
        :options="aFirstOptions"
      />
    </div>
    <div class="col">
      <label>{{ sLabel.second }}</label>
      <b-form-select
        v-model="valor"
        :options="options"
      />
    </div>
  </div>
</template>
  <script>
  import axiosServices from '../../../store/axiosServices';
  
  export default {
    name: "FormDualSelect",
    props: {
      value: {},
      oValorField: {},
      sKeyField: {
        type: String,
        default: ''
      },
      sLabel: {},
      sEndPoint: {},
      sFilterMenu: {
        type: Boolean
      },
    },
    data() {
      return {
        firstValor: '',
        valor: this.value,

        aItemsData: [],
        loadSelect: false,
        aFirstOptions: this.aItemsData,
        options: [],
        bState: false
      }
    },
    async mounted() {
      await this.onGetItems();
    },
    methods: {
      async onGetItems() {
        this.loadSelect = true;
        const aItems = await axiosServices.onAxiosGet(`${this.sEndPoint.first.sEndPoint}`);
        let aNewOptions = [];
        aItems.data.forEach(oItem => {
            let sText = '';
            if(oItem.hasOwnProperty('name')) {
                sText = oItem.name;
            } else if(oItem.hasOwnProperty('code')) {
                sText = oItem.code;
            } else {
                sText = oItem.description;
            }
            aNewOptions = [...aNewOptions, { value: oItem.id, text: sText }]
        });
        this.aFirstOptions = aNewOptions;
        this.loadSelect = false;
      },
    },
    watch: {
      valor (newValor) {
        if (newValor) {
          this.$emit('updateValor', newValor)
        }
      },
      value (newValue) {
        this.valor = newValue
      },
      aFirstOptions () {
        let sField = this.sEndPoint.first.sField;
        this.firstValor = this.oValorField[`${sField}`];
      },
      oValorField () {
        this.valor = this.aItemsData.find( element => element.value == this.oValorField[`${this.sKeyField}`]) != undefined ? this.aItemsData.find( element => element.value == this.oValorField[`${this.sKeyField}`]) : this.value
      },
      async firstValor(newValor){
        const aItems = await axiosServices.onAxiosGet(`${this.sEndPoint.second}/${newValor}`);
        this.options = aItems.data;
        if(this.oValorField) this.valor = this.oValorField[`${this.sKeyField}`]
      }
    }
  }
  </script>