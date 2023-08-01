<template>
    <div>
        <label v-if="!bHideLabel">{{ sLabel }}</label>
        <Multiselect 
            v-model="valor" 
            :options="options"
            track-by="id"
            label="name"
            :close-on-select="true"
        ></Multiselect>
    </div>
</template>
<script>
import axiosServices from '../../../store/axiosServices';
import Multiselect from 'vue-multiselect'
export default {
    name: 'FormSelect',
    components: {
        Multiselect
    },
    props: {
        value: {},
        oValorField: {},
        bHideLabel: {
            type: Boolean,
            default: false
        },
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
        secondsDiff(fecha1, fecha2) {
            // Convertir las fechas a objetos Date
            const date1 = new Date(fecha1);
            const date2 = new Date(fecha2);
            const diferencia = Math.abs(date2 - date1);
            const diferenciaSegundos = diferencia / 1000;
            return diferenciaSegundos;
        },
        async onGetItems() {
            this.loadSelect = true;
            if(localStorage.getItem(this.sEndPoint)) {
                const localStorageData = JSON.parse(localStorage.getItem(this.sEndPoint));
                if(this.secondsDiff(localStorageData.date, new Date()) < 30) {
                    return this.options = localStorageData.data;
                }
            }
            const aItems = await axiosServices.onAxiosGet(`${this.sEndPoint}`)
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
                aNewOptions = [...aNewOptions, { id: oItem.id, name: sText }]
            });
            this.options = aNewOptions;
            this.loadSelect = false;
            const parsed = JSON.stringify({
                date: (new Date()), 
                data: aNewOptions
            });
            localStorage.setItem(this.sEndPoint, parsed);
        },
    },
    watch: {
        valor(newValor) {
            this.$emit('updateValor', newValor?.id)
        },
        value(newValue) {
            this.valor = newValue; 
        },
        oValorField(newOvalorField) {
            this.valor = this.options.find(option => option.id == newOvalorField[`${this.sKeyField}`]);
        },
        options: {
            handler(newOptions) {
                if(this.oValorField && Object.entries(this.oValorField).length) {
                    this.valor = newOptions.find(option => option.id == this.oValorField[`${this.sKeyField}`]);
                }
            }
        },
    }
}
</script>
<style lang="scss">
@import '../../../assets/scss/select.scss';
</style>