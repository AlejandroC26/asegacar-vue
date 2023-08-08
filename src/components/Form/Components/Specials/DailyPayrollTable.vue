<template>
    <div>
        <div class="d-flex justify-content-center mb-3 mt-3" v-if="bLoading">
            <b-spinner label="Loading..."></b-spinner>
        </div>
        <div class="form-table" :style="`--cols: ${aSubComponents.length}`" v-show="nAnimals">
            <div class="header">
                <div v-for="oComponent in aSubComponents">{{ oComponent.sLabel }}</div>
            </div>
            <div class="table-row" v-for="row in nAnimals" :key="row">
                <div
                    v-for="(oComponent) in aEditedComponents"
                    :sm="oComponent.nCol"
                >
                    <component 
                        :bHideLabel="true"
                        :is="oComponent.sComponent" 
                        :sEndPoint="oComponent.sEndPoint" 
                        :sKeyField="oComponent.sName"
                        :aOptions="oComponent.aOptions"
                        :oValorField="aValorFields[row-1]"
                        @updateValor="onGetValuesForm(oComponent.sName, $event, row-1)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormText from "../FormText.vue";
import FormArea from "../FormArea.vue";
import FormSelect from "../FormSelect.vue";
import FormDate from "../FormDate.vue";

import axiosServices from '../../../../store/axiosServices';

export default {
    name: 'DailyPayrollTable',
    props: {
        aSubComponents: [],
        oValorField: {},
        sKeyField: {
            type: String,
            default: ''
        },
        sEndPoint: {
            type: String,
            default: ''
        }
    },
    components: {
        FormText,
        FormArea,
        FormSelect,
        FormDate
    },
    data() {
        return {
            bLoading: false,
            nAnimals: 0,
            aValorFields: [],
            aLocalFields: [],
            aEditedComponents: [],
        }
    },
    mounted() {
        this.onGetData();
    },
    methods: {
        async onGetData() {
            this.bLoading = true;
            let aEndPoints = [];
            aEndPoints = this.aSubComponents.filter(oComponent => oComponent.sEndPoint);
            aEndPoints = aEndPoints.map(oComponent => {return oComponent.sEndPoint});
            let axiosData = await this.onSetEndPointsData(aEndPoints);
            let oEndPoints = {};
            aEndPoints.forEach((sEndPoint, key) => {
                oEndPoints[sEndPoint] = axiosData[key];
            });

            this.aEditedComponents = this.aSubComponents.map(oComponent => {
                oComponent['aOptions'] = oEndPoints[oComponent.sEndPoint] ?? [];
                return oComponent;
            });
            this.bLoading = false;
        },
        async onSetEndPointsData(data) {
            return new Promise(async (resolve, reject) => { 
                try {
                    const axiosData = await Promise.all(data.map(async (element) => {
                        const response = await axiosServices.onAxiosGet(element);
                        return response.data;
                    }));
                    resolve(axiosData);
                } catch (error) {
                    reject(error);
                }
            });
        },
        onGetValuesForm(index, data, row) {
            if(this.aLocalFields[row]) {
                this.aLocalFields[row][index] = data;
            } else {
                this.aLocalFields[row] = {};
                this.aLocalFields[row][index] = data;
            }
            this.$emit('updateValor', this.aLocalFields)
        }
    },
    watch: {
        oValorField(newValorField) {
            this.aValorFields = newValorField[`${this.sKeyField}`];
        },
        async sEndPoint(sNewEndPoint) {
            this.nAnimals = 0;
            if(sNewEndPoint.split('/')[1] && sNewEndPoint.split('/')[1] !== 'undefined') {
                const response = await axiosServices.onAxiosGet(sNewEndPoint);
                const nAnimals = response.data.data.no_animals;
                this.nAnimals = nAnimals ?? 0;
            }
        }
    },
}
</script>
<style>
.form-table {
    background: #fff;
    display: grid;
    gap: 1rem;
}
.form-table > div {
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 1rem;
}
.table-row textarea.form-control {
    height: 32px;
}
</style>