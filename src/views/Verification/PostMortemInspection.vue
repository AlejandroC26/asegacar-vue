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
    name: 'PostMortemInspection',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Inpección Post Mortem',
            sEndPoint: 'postmortemInspections',
            aFields: [
                {
                    sName: 'id_master',
                    sLabel: 'Fecha y Responsable',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMaster/3',
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
                    sName: 'id_intestines_cause',
                    sLabel: 'Intestinos - Causa',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'intestines_quantity',
                    sLabel: 'Intestinos - Cantidad',
                    sComponent: 'FormNumber',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },

                {
                    sName: 'id_livers_cause',
                    sLabel: 'Hígado - Causa',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'liver_quantity',
                    sLabel: 'Hígado - Cantidad',
                    sComponent: 'FormNumber',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },

                {
                    sName: 'id_lungs_cause',
                    sLabel: 'Pulmones - Causa',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'lungs_quantity',
                    sLabel: 'Pulmones - Cantidad',
                    sComponent: 'FormNumber',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },

                {
                    sName: 'id_udders_cause',
                    sLabel: 'Ubres - Causa',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'udders_quantity',
                    sLabel: 'Ubres - Cantidad',
                    sComponent: 'FormNumber',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },

                {
                    sName: 'id_legs_cause',
                    sLabel: 'Piernas - Causa',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'legs_quantity',
                    sLabel: 'Piernas - Cantidad',
                    sComponent: 'FormNumber',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },

                {
                    sName: 'id_purges_cause',
                    sLabel: 'Despurgos - Causa',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'purges_quantity',
                    sLabel: 'Despurgos - Cantidad',
                    sComponent: 'FormNumber',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },

                {
                    sName: 'other_organ',
                    sLabel: 'Otros - Órgano',
                    sComponent: 'FormText',
                    sEndPoint: 'sltCauses',
                    nCol: 12
                },
                {
                    sName: 'id_other_cause',
                    sLabel: 'Otros - Causa',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'other_quantity',
                    sLabel: 'Otros - Cantidad',
                    sComponent: 'FormNumber',
                    sEndPoint: 'sltCauses',
                    nCol: 6
                },
                {
                    sName: 'insp_ganglions',
                    sLabel: 'INSP. Ganglios',
                    sComponent: 'FormArea',
                    sEndPoint: 'sltCauses',
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