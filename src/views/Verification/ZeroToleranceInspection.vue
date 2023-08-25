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
import Aside from '@/components/Aside.vue';
import DefaultGrid from '@/components/Grid/Grid.vue';
import Right from '@/components/Right.vue';

export default {
    name: 'ZeroToleranceInspection',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Inspección Cero Tolerancia',
            sEndPoint: 'zeroToleranceInspection',
            aFields: [
            {
                    sName: 'id_master',
                    sLabel: 'Fecha',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMaster/5',
                    nCol: 12
                },
                {
                    sComponent: 'FormDualSelect',
                    sName: 'id_daily_payroll',
                    sLabel: {
                        first: 'Expendio',
                        second: '# Animal'
                    },
                    nCol: 12,
                    sEndPoint: {
                        first: { 
                            sField: 'id_outlet',
                            sEndPoint: 'sltAntemoremOutlets'
                        },
                        second: 'sltAntemoremAnimals'
                    }
                },
                {
                    sName: 'milk',
                    sLabel: 'Leche',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'fecal_matter',
                    sLabel: 'M. Fecal',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'rumen_content',
                    sLabel: 'Contenido Rumial',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'corrective_actions',
                    sLabel: 'Acciones Correctivas',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'quantity',
                    sLabel: 'Cantidad',
                    sComponent: 'FormNumber',
                    nCol: 12
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