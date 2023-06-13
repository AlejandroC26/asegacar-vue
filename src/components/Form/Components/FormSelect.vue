<template>
    <div>
        <label>{{ sLabel }}</label>
        <b-form-select
            v-model="valor"
            :options="options"
        />
    </div>
</template>
<script>
import axiosServices from '../../../store/axiosServices';
export default {
    name: 'FormSelect',
    props: {
        value: {},
        oValorField: {},
        sKeyField: {
            type: String,
            default: ''
        },
        sLabel: {
            type: String,
            default: ''
        },
        sEndPoint: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            valor: '',
            sKey: '',
            options: [],
        }
    },
    mounted() {
        this.onGetItems();
    },
    methods: {
        async onGetItems() {
            this.loadSelect = true;
            axiosServices.onAxiosGet(`${this.sEndPoint}`).then(aItems => {
                let aNewOptions = [ { value: "", text: "..." } ];
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
                this.options = aNewOptions;
                this.loadSelect = false;
            })
        },
    },
    watch: {
        valor(newValor) {
            this.$emit('updateValor', newValor)
        },
        value(newValue) {
            this.valor = newValue; 
        },
        oValorField(newValorField) {
            this.valor = newValorField[`${this.sKeyField}`]
        }
    }
}
</script>