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
    name: 'ChannelConditioning',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Acondicionamiento De La Canal',
            sEndPoint: 'channelConditioning',
            aFields: [
            {
                    sName: 'id_master',
                    sLabel: 'Fecha',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMaster/6',
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
                    sName: 'skin',
                    sLabel: 'Piel',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'hair',
                    sLabel: 'Cabello',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'hematoma',
                    sLabel: 'Hematoma',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'abscess',
                    sLabel: 'Abseso',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'parasite',
                    sLabel: 'Parásito',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'other',
                    sLabel: 'Otro',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'correction',
                    sLabel: 'Corrección',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'quantity',
                    sLabel: 'Cantidad',
                    sComponent: 'FormNumber',
                    nCol: 6
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