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
    name: 'Guides',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Guías',
            sEndPoint: 'guides',
            aFields: [
                {
                    sName: 'code',
                    sLabel: 'No Guía',
                    sComponent: 'FormText',
                    sEndPoint: '',
                    nCol: 12
                },
                {
                    sName: 'date_entry',
                    sLabel: 'Fecha de Ingreso',
                    sComponent: 'FormDate',
                    nCol: 6
                },
                {
                    sName: 'time_entry',
                    sLabel: 'Hora de Ingreso',
                    sComponent: 'FormTime',
                    nCol: 6
                },
                {
                    sName: 'state',
                    sLabel: 'Estado',
                    sComponent: 'FormState',
                    sVisible: 'edit',
                    nCol: 12
                },
                {
                    sName: 'id_owner',
                    sLabel: 'Propietario',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 6
                },
                {
                    sName: 'id_buyer',
                    sLabel: 'Comprador',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 6
                },
                {
                    sName: 'establishment_name',
                    sLabel: 'Nombre del Predio',
                    sComponent: 'FormText',
                    sEndPoint: '',
                    nCol: 12
                },
                {
                    sName: 'id_source',
                    sLabel: 'Procedencia',
                    sComponent: 'FormDepartmentCity',
                    nCol: 12
                },
                {
                    sName: 'id_destination',
                    sLabel: 'Destino',
                    sComponent: 'FormDepartmentCity',
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