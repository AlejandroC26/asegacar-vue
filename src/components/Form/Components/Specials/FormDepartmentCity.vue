<template>
    <div class="row">
        <div class="col-12 mt-2">
            <label style="color: #9d9d9d;">{{ sLabel }}</label>
        </div>
        <div class="col-md-6">
            <label>Departamento</label>
            <Multiselect 
                v-model="sDepartment" 
                :options="aDepartmentOptions"
                track-by="value"
                label="text"
                :close-on-select="true"
            ></Multiselect>
        </div>
        <div class="col-md-6">
            <label>Ciudad</label>
            <Multiselect 
                v-model="valor" 
                :options="aCityOptions"
                track-by="value"
                label="text"
                :close-on-select="true"
            ></Multiselect>
        </div>
    </div>
</template>
<script>
import axiosServices from '../../../../store/axiosServices';
import Multiselect from 'vue-multiselect'
export default {
    name: 'FormDepartmentCity',
    components: {
        Multiselect
    },
    props: {
        value: {},
        oValorField: {},
        sEndPoint: {},
        sKeyField: {
            type: String,
            default: ''
        },
        sLabel: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            valor: '',
            sDepartment: '',
            aDepartmentOptions: [],
            aCityOptions: []
        }
    },
    async mounted() {
        await this.onGetItems();
    },
    methods: {
        async onGetItems() {
            this.loadSelect = true;
            const aItems = await axiosServices.onAxiosGet('sltDepartments');
            let aNewOptions = [];
            aItems.data.forEach(oItem => {
                let sText = oItem.name;
                aNewOptions = [...aNewOptions, { value: oItem.id, text: sText, cities: oItem.cities }]
            });
            this.aDepartmentOptions = aNewOptions;
            this.loadSelect = false;
            if(Object.entries(this.oValorField).length > 0) {
                this.sDepartment = aNewOptions.find(option => option.value == this.oValorField[`${this.sEndPoint.field}`]);
            }
        },
    },
    watch: {
        valor(newValor) {
            this.$emit('updateValor', newValor?.value)
        },
        value(newValue) {
            this.valor = newValue; 
        },
        sDepartment(newDepartment) {
            const aDepartment = this.aDepartmentOptions.find(oDepartment => oDepartment.value === newDepartment.value);
            this.aCityOptions = aDepartment?.cities.map(city => {
                return { value: city.id, text: city.name }
            })
        },
        aCityOptions: {
            handler(newCities) {
                if(Object.entries(this.oValorField).length) {
                    this.valor = newCities.find(citie => citie.value === this.oValorField[`${this.sKeyField}`])
                }
            }
        }
    }
}
</script>