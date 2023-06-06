<template>
    <div class="row">
        <div class="col-12 mt-2">
            <label style="color: #9d9d9d;">{{ sLabel }}</label>
        </div>
        <div class="col-md-6">
            <label>Departamento</label>
            <b-form-select
                v-model="sDepartment"
                :options="aDepartmentOptions"
            />
        </div>
        <div class="col-md-6">
            <label>Ciudad</label>
            <b-form-select
                v-model="valor"
                :options="aCityOptions"
            />
        </div>
    </div>
</template>
<script>
import axiosServices from '../../../../store/axiosServices';
export default {
    name: 'FormDepartmentCity',
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
    },
    data() {
        return {
            valor: '',
            sDepartment: '',
            aDepartmentOptions: [],
            aCityOptions: []
        }
    },
    mounted() {
        this.onGetItems();
    },
    methods: {
        async onGetItems() {
            this.loadSelect = true;
            axiosServices.onAxiosGet('sltDepartments').then(aItems => {
                let aNewOptions = [];
                aItems.data.forEach(oItem => {
                    let sText = oItem.name;
                    aNewOptions = [...aNewOptions, { value: oItem.id, text: sText, cities: oItem.cities }]
                });
                this.aDepartmentOptions = aNewOptions;
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
        },
        sDepartment(newDepartment) {
            const aDepartment = this.aDepartmentOptions.find(oDepartment => oDepartment.value === newDepartment);
            let aCities = [];
            aDepartment.cities.forEach(city => {
                aCities = [...aCities, { value: city.id, text: city.name }]
            });
            this.aCityOptions = aCities;
        }
    }
}
</script>