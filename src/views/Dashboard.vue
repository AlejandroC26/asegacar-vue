<template>
    <div class="application-container">
        <Aside/>
        <main>
                    
        </main>
        <Right/>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';

export default {
    name: 'Dashboard',
    components: {
        Aside,
        Right,
    },
    data: function(){
        return {
            sTitle: 'Panel de Administración',
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