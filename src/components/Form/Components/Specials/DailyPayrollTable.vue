<template>
<div class="form-table" :style="`--cols: ${aSubComponents.length}`" v-show="nAnimals">
    <div class="header">
        <div v-for="oComponent in aSubComponents">{{ oComponent.sLabel }}</div>
    </div>
    <div class="table-row" v-for="row in nAnimals" :key="row">
        <div
            v-for="(oComponent) in aSubComponents"
            :sm="oComponent.nCol"
        >
            <component 
                :bHideLabel="true"
                :is="oComponent.sComponent" 
                :sLabel="oComponent.sLabel"
                :sEndPoint="oComponent.sEndPoint" 
                :sKeyField="oComponent.sName"
                :options="oComponent.options"
                :oValorField="aValorFields[row-1]"
                @updateValor="onGetValuesForm(oComponent.sName, $event, row-1)"
            />
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
            nAnimals: 0,
            aValorFields: [],
            aLocalFields: [],
        }
    },
    methods: {
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
            if(sNewEndPoint.split('/')[1] && sNewEndPoint.split('/')[1] !== 'undefined') {
                const response = await axiosServices.onAxiosGet(sNewEndPoint);
                const nAnimals = response.data.data.no_animals;
                if(nAnimals) {
                    this.nAnimals = 1;
                    setTimeout(() => { this.nAnimals = nAnimals; }, 500);
                }
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