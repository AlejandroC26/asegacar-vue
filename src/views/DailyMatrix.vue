<template>
    <div class="application-container">
        <Aside/>
        <main>
            <GridDailyMatrix 
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
import GridDailyMatrix from '../components/Grid/GridDailyMatrix.vue';
import Right from '../components/Right.vue';

export default {
    name: 'DailyMatrix',
    components: {
        Aside,
        Right,
        GridDailyMatrix
    },
    data: function(){
        return {
            sTitle: 'Matriz Diaria',
            sEndPoint: 'dailyMatrix',
            aFields: [
                {
                    sName: 'benefit_date',
                    sLabel: 'Fecha de Beneficio',
                    sComponent: 'FormDate',
                    nCol: 12
                },
                /* {
                    sName: 'format_code',
                    sLabel: 'Código de Formato',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltFormatCodes',
                    nCol: 6
                }, */
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