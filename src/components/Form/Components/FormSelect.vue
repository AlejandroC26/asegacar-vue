<template>
    <div>
        <label v-if="!bHideLabel">{{ sLabel }}</label>
        <Multiselect 
            v-model="valor" 
            :options="options"
            :disabled="bDisabled"
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
        bDisabled: {
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
        aOptions: {
            type: Array,
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
            let aNewOptions = [ { value: "", text: "..." } ];
            let options = [];
            if(!this.aOptions) {
                const aItems = await axiosServices.onAxiosGet(`${this.sEndPoint}`)
                options = aItems.data;
            } else {
                options = this.aOptions;
            }
            if(Array.isArray(options)) {
                options.forEach(oItem => {
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
            }
            this.options = aNewOptions;
            this.loadSelect = false;
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