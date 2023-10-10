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
import Aside from '@/components/Aside.vue'
import DefaultGrid from '@/components/Grid/Grid.vue'
import Right from '@/components/Right.vue'

export default {
    name: 'AntemortemInspection',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Inspección Antemortem',
            sEndPoint: 'antemortemInspection',
            aFields: [
                {
                    sName: 'date',
                    sLabel: 'Fecha',
                    sComponent: 'FormDate',
                    sEndPoint: '',
                    nCol: 6
                },
                {
                    sName: 'corral_number',
                    sLabel: 'Número Corral',
                    sComponent: 'FormNumber',
                    sEndPoint: '',
                    nCol: 6
                },
                {
                    sComponent: 'FormDualSelect',
                    sName: 'id_daily_payroll',
                    sLabel: {
                        first: 'Guía',
                        second: '# Animal'
                    },
                    nCol: 12,
                    sEndPoint: {
                        first: { 
                            sField: 'id_guide',
                            sEndPoint: 'sltGuides'
                        },
                        second: 'sltPayrrollsGuide'
                    }
                },
                {
                    sName: 'time_entry',
                    sLabel: 'Hora Ingreso',
                    sComponent: 'FormTime',
                    nCol: 6
                },
                {
                    sName: 'corral_entry',
                    sLabel: 'Ingreso corral sacrificio',
                    sComponent: 'FormTime',
                    nCol: 6
                },
                {
                    sName: 'id_veterinary',
                    sLabel: 'Veterinario',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltUsers',
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