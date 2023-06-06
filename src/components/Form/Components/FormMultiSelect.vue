<template>
    <div>
        <label>{{ sLabel }}</label>
        <Multiselect 
            v-model="valor" 
            :options="options"
            track-by="id"
            label="name"
            :multiple="true"
            :close-on-select="false"
        ></Multiselect>
        <!-- <b-form-select
            v-model="valor"
            :options="options"
        /> -->
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import axiosServices from '../../../store/axiosServices';
export default {
    name: 'FormMultiSelect',
    components: {
        Multiselect
    },
    props: {
        value: false,
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
                    aNewOptions = [...aNewOptions, { id: oItem.id, name: sText }]
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>