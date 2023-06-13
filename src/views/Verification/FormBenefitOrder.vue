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
    name: 'MasterTable',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Planilla de Orden de Beneficio',
            sEndPoint: 'formBenefitOrder',
            aFields: [
                {
                    sName: 'id_master',
                    sLabel: 'Fecha y Responsable',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMaster/2',
                    nCol: 12
                },
                {
                    sComponent: 'FormDualSelect',
                    sName: 'id_antemortem_daily_record',
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