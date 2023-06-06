import axios from "axios" ;
import store from '../store';
export default {
    namespaced: true,
    mutations: {},
    actions: {
        async createSale({commit}, data){
            let url = store.state.api_url+'/api/sale/create';
            return await axios.post(url, data,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async searchSales({commit}, data){
            let url = store.state.api_url+'/api/search/sales';
            return await axios.post(url, data, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
        }
    }
}