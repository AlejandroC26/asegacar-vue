<template>
    <div class="application-container">
        <Aside/>
        <main>
            <DefaultGrid 
                :sTitle="sTitle"
                :aComponents="aFields"
                :sEndPoint="sEndPoint"
                :sFormSize="sFormSize"
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
            sFormSize: 'xxl',
            aFields: [
                {
                    sName: 'date',
                    sLabel: 'Fecha',
                    sComponent: 'FormDate',
                    nCol: 6
                },
                {
                    sName: 'id_responsable',
                    sLabel: 'Responsable',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 6
                },

                {
                    sName: 'id_guide',
                    sLabel: 'Guía',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltGuides',
                    nCol: 12
                },
                {
                    sName: 'entries',
                    sComponent: 'DailyPayrollTable',
                    sEndPoint: 'guides',
                    sDependsOn: 'id_guide',
                    nCol: 12,
                    aSubComponents: [
                        {
                            sName: 'code',
                            sLabel: 'Código Asignado',
                            sComponent: 'FormText',
                            nCol: 6
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
                            sName: 'sacrifice_date',
                            sLabel: 'Fecha de sacrificio',
                            sComponent: 'FormDate',
                            nCol: 12
                        },
                        {
                            sName: 'id_outlet',
                            sLabel: 'N° Expendio',
                            sComponent: 'FormSelect',
                            sEndPoint: 'sltOutlets',
                            nCol: 12
                        },
                        {
                            sName: 'special_order',
                            sLabel: 'Orden Especial',
                            sComponent: 'FormArea',
                            nCol: 12
                        },
                    ]
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