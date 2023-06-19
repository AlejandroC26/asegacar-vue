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
            sTitle: 'Matrices',
            sEndPoint: 'masterTable',
            aFields: [
                {
                    sName: 'id_responsable',
                    sLabel: 'Responsable (opcional)',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 5
                },
                {
                    sName: 'date',
                    sLabel: 'Fecha',
                    sComponent: 'FormDate',
                    nCol: 7
                },

                {
                    sName: 'id_verified_by',
                    sLabel: 'Verificado por (opcional)',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 6
                },

                {
                    sName: 'id_supervised_by',
                    sLabel: 'Supervisado por (opcional)',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 6
                },
                {
                    sName: 'id_elaborated_by',
                    sLabel: 'Elaborado por (opcional)',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 6
                },
                {
                    sName: 'species',
                    sLabel: 'Especie (opcional)',
                    sComponent: 'FormText',
                    nCol: 6
                },

                {
                    sName: 'id_master_type',
                    sLabel: 'Tipo',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMasterType',
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