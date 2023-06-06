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
    name: 'Persons',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Personas',
            sEndPoint: 'persons',
            aFields: [
                {
                    sName: 'fullname',
                    sLabel: 'Nombre',
                    sComponent: 'FormText',
                    sEndPoint: '',
                    nCol: 6
                },
                {
                    sName: 'document',
                    sLabel: 'Documento',
                    sComponent: 'FormNumber',
                    sEndPoint: '',
                    nCol: 6
                },
                {
                    sName: 'adress',
                    sLabel: 'Dirección',
                    sComponent: 'FormText',
                    sEndPoint: '',
                    nCol: 6
                },
                {
                    sName: 'phone',
                    sLabel: 'Teléfono',
                    sComponent: 'FormText',
                    sEndPoint: '',
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