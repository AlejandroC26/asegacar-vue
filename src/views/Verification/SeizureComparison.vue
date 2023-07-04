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
    name: 'SeizureComparison',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Comparación Decomisos',
            sEndPoint: 'seizureComparison',
            aFields: [
            {
                    sName: 'id_master',
                    sLabel: 'Fecha',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltMaster/8',
                    nCol: 12
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
                    sName: 'udders',
                    sLabel: 'Ubres',
                    sComponent: 'FormText',
                    nCol: 6
                },
                
                {
                    sName: 'head',
                    sLabel: 'Cabeza',
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
                    sName: 'legs',
                    sLabel: 'Patas',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'others',
                    sLabel: 'Otros',
                    sComponent: 'FormText',
                    nCol: 12
                },
                {
                    sName: 'destocking',
                    sLabel: 'Despurgos (Kg)',
                    sComponent: 'FormText',
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