<template>
    <div class="application-container">
        <Aside/>
        <main>
            <DefaultGrid 
                :sTitle="sTitle"
                :aComponents="aFields"
                :sFormatName="sFormatName"
                :sEndPoint="sEndPoint"
                :bDisableRegister="true"
                :bDisableDelete="true"
            />            
        </main>
        <Right/>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import DefaultGrid from '../components/Grid/GridPendingSacrifices.vue';
import Right from '../components/Right.vue';

export default {
    name: 'AntemortemDailyRecord',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Sacrificios Pendientes',
            sEndPoint: 'antemortemDailyRecord',
            sFormatName: 'For-bovinos-plantilla-diaria',
            aFields: [
                {
                    sName: 'id_guide',
                    sLabel: 'N° Guía',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltGuides',
                    bDisabled: true,
                    nCol: 6
                },
                {
                    sName: 'code',
                    sLabel: 'Código Asignado',
                    sComponent: 'FormText',
                    bDisabled: true,
                    nCol: 6
                },
                {
                    sName: 'id_gender',
                    sLabel: 'Sexo',
                    sComponent: 'FormSelect',
                    sEndPoint: 'genders',
                    bDisabled: true,
                    nCol: 6
                },
                {
                    sName: 'id_age',
                    sLabel: 'Edad',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltAges',
                    bDisabled: true,
                    nCol: 6
                },
                {
                    sName: 'id_color',
                    sLabel: 'Color',
                    sComponent: 'FormSelect',
                    sEndPoint: 'colors',
                    bDisabled: true,
                    nCol: 6
                },
                {
                    sName: 'id_purpose',
                    sLabel: 'Propósito',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPurposes',
                    bDisabled: true,
                    nCol: 6
                },
                {
                    sName: 'id_outlet',
                    sLabel: 'N° Expendio',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltOutlets',
                    nCol: 12
                },
                {
                    sName: 'sacrifice_date',
                    sLabel: 'Fecha de sacrificio',
                    sComponent: 'FormDate',
                    nCol: 12
                },
            ],
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