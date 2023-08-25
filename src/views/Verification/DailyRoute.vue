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
    name: 'DailyRoute',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Rutas Diarias',
            sEndPoint: 'dailyRoutes',
            aFields: [
                {
                    sName: 'id_route',
                    sLabel: 'Ruta',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltRoutes',
                    nCol: 12
                },
                {
                    sName: 'id_outlet',
                    sLabel: 'Expendio',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltOutlets',
                    nCol: 6
                },
                {
                    sName: 'id_vehicle',
                    sLabel: 'Vehiculo',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltVehicles',
                    nCol: 6
                },
                {
                    sName: 'quantity',
                    sLabel: 'Cantidad',
                    sComponent: 'FormNumber',
                    nCol: 6
                },
                {
                    sName: 'date',
                    sLabel: 'Fecha',
                    sComponent: 'FormDate',
                    nCol: 6
                },
                {
                    sName: 'orders',
                    sLabel: 'Ordenes',
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