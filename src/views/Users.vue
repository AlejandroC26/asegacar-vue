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
import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import DefaultGrid from '../components/Grid/Grid.vue';
import Right from '../components/Right.vue';

export default {
    name: 'Users',
    components: {
        Aside,
        Right,
        DefaultGrid
    },
    data: function(){
        return {
            sTitle: 'Usuarios',
            sEndPoint: 'users',
            aFields: [
                {
                    sName: 'id_person',
                    sLabel: 'Persona',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 12
                },
                {
                    sName: 'login',
                    sLabel: 'Login',
                    sComponent: 'FormText',
                    nCol: 8
                },
                {
                    sName: 'id_charge',
                    sLabel: 'Cargo',
                    sComponent: 'FormSelect',
                    nCol: 4,
                    sEndPoint: 'sltCharges',
            
                },
                {
                    sName: 'password',
                    sLabel: 'Password',
                    sComponent: 'FormPassword',
                    sVisible: 'create',
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