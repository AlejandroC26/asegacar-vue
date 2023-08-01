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
import DefaultGrid from '../components/Grid/GridGuides.vue';
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
                    nCol: 8
                },
                {
                    sName: 'no_animals',
                    sLabel: '# Animales',
                    sComponent: 'FormNumber',
                    nCol: 4
                },
                {
                    sName: 'consecutive',
                    sLabel: 'Consecutivo',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'id_specie',
                    sLabel: 'Especie',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltSpecies',
                    nCol: 6
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
                    sEndPoint: { field: 'id_department_source' },
                    nCol: 12
                },
                {
                    sName: 'id_destination',
                    sLabel: 'Destino',
                    sComponent: 'FormDepartmentCity',
                    sEndPoint: { field: 'id_department_destination' },
                    nCol: 12
                },
                {
                    sName: 'file_attached',
                    sLabel: 'Archivo',
                    sComponent: 'FormFile',
                    nCol: 12
                },
                {
                    sName: 'state',
                    sLabel: 'Estado',
                    sComponent: 'FormState',
                    sVisible: 'edit',
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