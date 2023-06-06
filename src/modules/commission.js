import axios from "axios" ;
import store from '../store';
export default {
    namespaced: true,
    state: {
        comm_data: {
            loaded: false,
            total_comm_money: 0,
            total_payments_money: 0,
            pending_coms_money: 0,
            users_comm_money: 0,
            company_comm_money: 0
        }
    },
    mutations: {
        async infoCommissions(state){
            let url = store.state.api_url+'/api/commission/general'
            return await axios.get(url,
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                if(res.status == 200){
                    state.comm_data.total_comm_money = res.data.total_comm_money; 
                    state.comm_data.total_payments_money = res.data.total_payments_money; 
                    state.comm_data.users_comm_money = res.data.users_comm_money; 
                    state.comm_data.company_comm_money = res.data.company_comm_money; 
                    state.comm_data.pending_coms_money = res.data.users_comm_money - res.data.total_payments_money;
                    state.comm_data.loaded = true;
                }
            }).catch(err => console.error(err.response));
        }
    },
    actions: {
        async searchCommissions({commit}, data){
            let url = store.state.api_url+'/api/search/commissions'
            return await axios.post(url, data, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async searchPayments({commit}, data){
            let url = store.state.api_url+'/api/search/payments'
            return await axios.post(url, data, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async paymentCommission({commit}, data){
            let url = store.state.api_url+'/api/commission/payment'
            return await axios.post(url, data, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
    }
}