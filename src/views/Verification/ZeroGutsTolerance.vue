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
    name: 'ZeroGutsTolerance',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Tolerancia Cero Visceras',
            sEndPoint: 'zeroGutsTolerance',
            aFields: [
            {
                    sName: 'id_master',
                    sLabel: 'Fecha',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMaster/4',
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
                {
                    sName: 'organ',
                    sLabel: 'Organo',
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
                    sName: 'resume',
                    sLabel: 'Resumen',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'hide',
                    sLabel: 'Piel',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'hair',
                    sLabel: 'Pelo',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'hem',
                    sLabel: 'HEM',
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
                    sName: 'others',
                    sLabel: 'Otros',
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
                    nCol: 12
                },
                {
                    sName: 'observations',
                    sLabel: 'Observaciones',
                    sComponent: 'FormArea',
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