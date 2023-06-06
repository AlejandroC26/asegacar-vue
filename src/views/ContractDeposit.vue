<template>
    <div class="application-container">
        <Aside/>
        <main>
            <GridFormData 
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
import GridFormData from '../components/Grid/GridContractDeposit.vue';
import Right from '../components/Right.vue';

export default {
    name: 'ContractDeposit',
    components: {
        Aside,
        Right,
        GridFormData
    },
    data: function(){
        return {
            sTitle: 'Depósito de Animales',
            sEndPoint: 'contracts',
            aFields: [
                {
                    sName: 'id_persons',
                    sLabel: 'Persona',
                    sComponent: 'FormSelect',
                    sEndPoint: 'sltPersons',
                    nCol: 6
                },
                {
                    sName: 'guide_number',
                    sLabel: 'Número Guía',
                    sComponent: 'FormText',
                    nCol: 6
                },
                {
                    sName: 'signature_date',
                    sLabel: 'Fecha Firma',
                    sComponent: 'FormDate',
                    nCol: 12
                },
                {
                    sName: 'signature',
                    sLabel: 'Firma',
                    sComponent: 'FormFileImage',
                    sEndPoint: 'contractSignature',
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