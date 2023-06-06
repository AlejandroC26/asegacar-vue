<template>
    <div class="application-container">
        <Aside/>
        <main>
            <ReportsGrid 
                :sTitle="sTitle"
            />            
        </main>
        <Right/>
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
    data: function(){
        return {
            sTitle: 'Vista de Reportes',
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