<template>
    <div class="application-container">
        <Aside/>
        <main>
            <DefaultGrid 
                :sTitle="sTitle"
                :aComponents="aFields"
                :sEndPoint="sEndPoint"
                :bEnablePdf="true"
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
    name: 'EmergencyCoilEntry',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Ingreso Bobinos Emergencia',
            sEndPoint: 'emergencyCoilEntry',
            aFields: [
                {
                    sName: 'date',
                    sLabel: 'Fecha',
                    sComponent: 'FormDate',
                    nCol: 6
                },
                {
                    sName: 'time',
                    sLabel: 'Hora',
                    sComponent: 'FormTime',
                    nCol: 6
                },
                {
                    sName: 'id_supervisor',
                    sLabel: 'Supervisor',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltUsers',
                    nCol: 6
                },
                {
                    sName: 'id_responsable',
                    sLabel: 'Responsable',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltUsers',
                    nCol: 6
                },
                {
                    sName: 'id_veterinary',
                    sLabel: 'Veterinario',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltUsers',
                    nCol: 6
                },
                {
                    sName: 'id_owner',
                    sLabel: 'Propietario',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltUsers',
                    nCol: 6
                },
                {
                    sName: 'iron',
                    sLabel: 'Hierro',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'corral_location',
                    sLabel: 'Ubicación Corral',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'id_location',
                    sLabel: 'Procedencia',
                    sComponent: 'FormDepartmentCity',
                    sEndPoint: { field: 'id_department_source' },
                    nCol: 12
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
                    sName: 'weight',
                    sLabel: 'Peso',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'temperature',
                    sLabel: 'Temperatura',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'heart_frequency',
                    sLabel: 'Frecuencia Cardiaca',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'respiratory_frequency',
                    sLabel: 'Frecuencia Respiratoria',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'findings',
                    sLabel: 'Hallazgos',
                    sComponent: 'FormArea',
                    nCol: 6
                },
                {
                    sName: 'observations',
                    sLabel: 'Observaciones',
                    sComponent: 'FormArea',
                    nCol: 6
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