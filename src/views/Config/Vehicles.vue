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
    name: 'Vehicles',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Vehiculo',
            sEndPoint: 'vehicles',
            aFields: [
                {
                    sName: 'plate',
                    sLabel: 'Placa',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'driver_name',
                    sLabel: 'Nombre del conductor',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'driver_document',
                    sLabel: 'Documento del conductor',
                    sComponent: 'FormText',
                    nCol: 12
                },
                {
                    sName: 'refrigerated',
                    sLabel: 'Refrigerado',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'isothermal',
                    sLabel: 'Isotermo',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'temperature',
                    sLabel: 'Temperatura',
                    sComponent: 'FormNumber',
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