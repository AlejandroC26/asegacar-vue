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
    name: 'VisceraDispatch',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Despacho Visceras',
            sEndPoint: 'visceraDispatch',
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
                    sName: 'head',
                    sLabel: 'Cabeza',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'small_ints',
                    sLabel: 'Ints. Delgado',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'large_ints',
                    sLabel: 'Ints. Grueso',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'panolon',
                    sLabel: 'Pañolon',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'rennet',
                    sLabel: 'Cuajo',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'callus',
                    sLabel: 'Callo',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'liver',
                    sLabel: 'Hígado',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'lung',
                    sLabel: 'Pulmones',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'legs',
                    sLabel: 'Patas',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'hands',
                    sLabel: 'Manos',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'udders',
                    sLabel: 'Ubres',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'booklet',
                    sLabel: 'Librillo',
                    sComponent: 'FormText',
                    nCol: 6
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