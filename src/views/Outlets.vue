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
    name: 'Outlets',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Expendios',
            sEndPoint: 'outlets',
            aFields: [
                {
                    sName: 'code',
                    sLabel: 'Código',
                    sComponent: 'FormText',
                    nCol: 4
                },
                {
                    sName: 'customer',
                    sLabel: 'Cliente',
                    sComponent: 'FormText',
                    nCol: 8
                },
                {
                    sName: 'primary_phone',
                    sLabel: 'Teléfono Principal',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'secondary_phone',
                    sLabel: 'Teléfono Secundario',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'establishment_name',
                    sLabel: 'Nombre Establecimiento',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'establishment_address',
                    sLabel: 'Dirección Establecimiento',
                    sComponent: 'FormText',
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