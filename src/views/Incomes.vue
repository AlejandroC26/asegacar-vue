<template>
    <div class="application-container">
        <Aside/>
        <main>
            <DefaultGrid 
                :sTitle="sTitle"
                :aComponents="aFields"
                :sEndPoint="sEndPoint"
            />            
        </main>
        <Right/>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import DefaultGrid from '../components/Grid/Grid.vue';
import Right from '../components/Right.vue';

export default {
    name: 'Incomes',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Ingresos',
            sEndPoint: 'incomes',
            aFields: [
                {
                    sName: 'code',
                    sLabel: 'Código',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'guide_number',
                    sLabel: 'Número de Guía',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'total_males',
                    sLabel: 'Total de Machos',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'total_females',
                    sLabel: 'Total de Hembras',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'date_entry',
                    sLabel: 'Fecha de Ingreso',
                    sComponent: 'FormDate',
                    nCol: 6
                },
                {
                    sName: 'time_entry',
                    sLabel: 'Hora de Ingreso',
                    sComponent: 'FormTime',
                    nCol: 6
                },
                {
                    sName: 'benefit_date',
                    sLabel: 'Fecha de beneficio',
                    sComponent: 'FormDate',
                    nCol: 6
                },
                {
                    sName: 'yard_sacrificed_time',
                    sLabel: 'Hora de ingreso corrales de sacrificio',
                    sComponent: 'FormTime',
                    nCol: 6
                },
                {
                    sName: 'gender',
                    sLabel: 'Género',
                    sComponent: 'FormLocalSelect',
                    nCol: 6,
                    options: [
                        {  value: "Macho", text: 'Macho' },
                        {  value: "Hembra", text: 'Hembra' },
                    ]
                },
                {
                    sName: 'color',
                    sLabel: 'Color',
                    sComponent: 'FormSelect',
                    sEndPoint: 'colors',
                    nCol: 6,
                },
                {
                    sName: 'id_age',
                    sLabel: 'Edad',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltAges',
                    nCol: 6
                },
                {
                    sName: 'id_purpose',
                    sLabel: 'Propósito',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPurposes',
                    nCol: 6
                },
                {
                    sName: 'id_outlet',
                    sLabel: 'Expendio',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltOutlets',
                    nCol: 6
                },
                {
                    sName: 'id_city',
                    sLabel: 'Procedencia',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCities',
                    nCol: 6
                },
            ]
        }
    },
    methods:{
        ...mapMutations(['loadSessionUser']),
    },
    mounted() {
        this.loadSessionUser();
    },
    computed: {
        ...mapState(['session_user']),
    }
}
</script>
<style>
.link{color: #007bff;}
</style>