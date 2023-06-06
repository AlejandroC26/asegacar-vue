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
import { mapMutations, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import DefaultGrid from '../components/Grid/GridDailyPayroll.vue';
import Right from '../components/Right.vue';

export default {
    name: 'DailyPayroll',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Planilla diaria',
            sEndPoint: 'dailyPayroll',
            aFields: [
                {
                    sName: 'id_outlet',
                    sLabel: 'Expendio',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltOutlets',
                    nCol: 12
                },
                {
                    sName: 'benefit_date',
                    sLabel: 'Fecha de beneficio',
                    sComponent: 'FormDate',
                    sVisible: 'edit',
                    nCol: 12
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
                    sName: 'colors',
                    sLabel: 'Colores',
                    sComponent: 'FormMultiSelect',
                    sEndPoint: 'colors',
                    nCol: 6
                },
                {
                    sName: 'genders',
                    sLabel: 'Sexos',
                    sComponent: 'FormMultiSelect',
                    sEndPoint: 'genders',
                    nCol: 6
                },
                {
                    sName: 'special_order',
                    sLabel: 'Orden Especial',
                    sComponent: 'FormArea',
                    nCol: 12
                }
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