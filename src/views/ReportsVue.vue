<template>
    <div class="application-container">
        <Aside />
        <main>
            <ReportsGrid :sTitle="sTitle" :aGroupCards="aDownloadCards" />
        </main>
        <Right />
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import ReportsGrid from '../components/Grid/ReportsGrid.vue';
import Right from '../components/Right.vue';

export default {
    name: 'ReportsVue',
    components: {
        Aside,
        Right,
        ReportsGrid
    },
    data: function () {
        return {
            sTitle: 'Vista de Reportes',
            aDownloadCards: [
                {
                    sVariant: 'primary',
                    aCards: [
                        {
                            sHeader: "Planilla Diaria",
                            sEndPoint: "dailyPayroll",
                            sFormatName: "Planilla diaria",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltDailyPayrolls',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Edades Bobinos",
                            sEndPoint: "ageBobins",
                            sFormatName: "EDADES BOBINOS",
                            aComponents: [
                                {
                                    sName: 'date',
                                    sLabel: 'Fecha de sacrificio',
                                    sComponent: 'FormDate',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Ante Morten",
                            sEndPoint: "antemortemDailyRecord",
                            sFormatName: "PLANILLA DIARIA ANTEMORTEM",
                            aComponents: [
                                {
                                    sName: 'sacrifice_date',
                                    sLabel: 'Fecha de Beneficio',
                                    sComponent: 'FormDate',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Matriz Diaria",
                            sEndPoint: "dailyMatrix",
                            sFormatName: "MATRIZ DIARIA",
                            aComponents: [
                                {
                                    sName: 'benefit_date',
                                    sLabel: 'Fecha de Beneficio',
                                    sComponent: 'FormDate',
                                    nCol: 12
                                },
                            ]
                        },
                    ]
                },
                {
                    sVariant: 'secondary',
                    aCards: [
                        {
                            sHeader: "Ruta Diaria",
                            sEndPoint: "dailyRoutes",
                            sFormatName: "Ruta Diaria",
                            aComponents: [
                                {
                                    sName: 'date',
                                    sLabel: 'Fecha',
                                    sComponent: 'FormDate',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Orden Beneficio",
                            sEndPoint: "formBenefitOrder",
                            sFormatName: "Orden de Beneficio",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltMaster/2',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Inspección Post Mortem",
                            sEndPoint: "postmortemInspections",
                            sFormatName: "Orden de Beneficio",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltMaster/3',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Tolerancia cero visceras",
                            sEndPoint: "zeroGutsTolerance",
                            sFormatName: "Tolerancia cero visceras",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltMaster/4',
                                    nCol: 12
                                },
                            ]
                        },
                    ]
                },
                {
                    sVariant: 'secondary',
                    aCards: [
                        {
                            sHeader: "Acondicionamiento de la Canal",
                            sEndPoint: "channelConditioning",
                            sFormatName: "Acondicionamiento de la Canal",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltMaster/6',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Despacho Visceras",
                            sEndPoint: "visceraDispatch",
                            sFormatName: "Despacho Visceras",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltMaster/7',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Comparación Decomisos",
                            sEndPoint: "seizureComparison",
                            sFormatName: "Comparación Decomisos",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltMaster/8',
                                    nCol: 12
                                },
                            ]
                        },
                        {
                            sHeader: "Inspección Cero Tolerancia",
                            sEndPoint: "zeroToleranceInspection",
                            sFormatName: "Inspección Cero Tolerancia",
                            aComponents: [
                                {
                                    sName: 'id_master',
                                    sLabel: 'Fecha y Responsable',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltMaster/5',
                                    nCol: 12
                                },
                            ]
                        },
                    ]
                },
                {
                    sVariant: 'primary',
                    aCards: [
                        {
                            sHeader: "Inspección Antemortem",
                            sEndPoint: "antemortemInspection",
                            sFormatName: "Inspección Antemortem",
                            aComponents: [
                                {
                                    sName: 'date',
                                    sLabel: 'Fecha',
                                    sComponent: 'FormDate',
                                    nCol: 6
                                },
                                {
                                    sName: 'time_entry',
                                    sLabel: 'Hora Ingreso',
                                    sComponent: 'FormTime',
                                    nCol: 6
                                },
                                {
                                    sName: 'id_veterinary',
                                    sLabel: 'Veterinario',
                                    sComponent: 'FormSelect',
                                    sEndPoint: 'sltAntemortemVeterinary',
                                    nCol: 12
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },
    methods: {
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
.link {
    color: #007bff;
}
</style>