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
import DefaultGrid from '../components/Grid/Grid.vue';
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
                    sName: 'id_master',
                    sLabel: 'Fecha y Responsable',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMaster/1',
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
                    sName: 'benefit_date',
                    sLabel: 'Fecha de beneficio',
                    sComponent: 'FormDate',
                    sVisible: 'edit',
                    nCol: 12
                },
                {
                    sName: 'id_color',
                    sLabel: 'Color',
                    sComponent: 'FormSelect',
                    sEndPoint: 'colors',
                    nCol: 6
                },
                {
                    sName: 'id_gender',
                    sLabel: 'Sexo',
                    sComponent: 'FormSelect',
                    sEndPoint: 'genders',
                    nCol: 6
                },
                {
                    sName: 'amount',
                    sLabel: 'Cantidad',
                    sComponent: 'FormNumber',
                    nCol: 12
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