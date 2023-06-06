import axios from "axios" ;
import store from '../store';
export default {
    namespaced: true,
    state: {
        sale_point : {
            id: '',
            name: '',
            nit: '',
            city_id: '',
            city_name: '',
            department: '',
            adress: '',
            representative: '',
            contact_phone: '',
            percent_gain: '',
            start_date: '',
            end_date: '',
            type: '',
            modality: '',
            options: [],
            state: '',
            code: '',
            created_at: '',
            password: '',
            password_confirmation: '',
        },
        loaded: false,
        commissions: [],
        sale_points : [],
    },
    mutations: {
        async loadSalePoint(state, id){
            state.sale_point.id = '';
            state.sale_point.city_name = '';
            let url = store.state.api_url+`/api/salepoints/list/${id}`;
            return await axios.post(url, null,
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                state.sale_point.id = res.data.id;
                state.sale_point.name = res.data.name;
                state.sale_point.nit = res.data.nit;
                /*=================*/
                state.sale_point.total_com = res.data.total_com;
                state.sale_point.payments = res.data.payments;
                state.sale_point.pending_payments = res.data.pending_payments;
                /*=================*/
                state.sale_point.city_id = res.data.city_id;
                state.sale_point.city_name = res.data.city_name;
                state.sale_point.department = res.data.department;
                state.sale_point.adress = res.data.adress;
                state.sale_point.representative = res.data.representative;
                state.sale_point.contact_phone = res.data.contact_phone;
                state.sale_point.percent_gain = res.data.percent_gain;
                state.sale_point.start_date = res.data.start_date;
                state.sale_point.end_date = res.data.end_date;
                state.sale_point.type = res.data.type;
                state.sale_point.modality = res.data.modality;
                state.sale_point.options = res.data.options;
                state.sale_point.state = res.data.state;
                state.sale_point.code = res.data.code;
                state.sale_point.created_at = res.data.created_at;
            }).catch(err => {
                console.log(err.response)
            })
        },
        async loadSalePoints(state, data){
            state.loaded_sale_points = false;
            let url = store.state.api_url+'/api/search/sale_points';
            return await axios.post(url, data,
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                state.loaded = true;
                state.sale_points = res.data;
            }).catch(err => {
                console.log(err)
            })
        },
        async loadCommissions(state, id){
            let url = store.state.api_url+`/api/salepoints/${id}/commissions`;
            return await axios.get(url,
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                var data = res.data;
                var years = [];
                for (var i = 0; i < data.length; i++) {
                    var month = data[i];
                
                    var curYear;
                    var year = {};
                    if(curYear != month.year){
                        curYear = month.year;
                        year.year = curYear;
                        year.money = 0;
                        year.months = data.filter(month => month.year == curYear);
                        year.months.forEach(month => {
                            year.money += month.money;
                        });

                        years.push(year);
                    }
                }
                state.commissions = years;
            }).catch(e => console.log(e.response))
        }
    },
    actions: {
        async searchPayments({commit}, data){
            let url = store.state.api_url+`/api/salepoints/${data.id}/payments/list`;
            return await axios.post(url, data, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },

        async createSalePoint({commit}, data){
            let url = store.state.api_url+`/api/salepoints/create`;
            return await axios.post(url, data ,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async updateSalePoint({commit}, data){
            let url = store.state.api_url+`/api/salepoints/update/${data.id}`;
            return await axios.post(url, data ,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async createPercentOption({commit}, data){
            let url = store.state.api_url+`/api/salepoints/percent/${data.id}`
            return await axios.post(url, data ,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async deletePercentOption({commit}, id){
            let url = store.state.api_url+`/api/salepoints/percent/delete/${id}`;
            return await axios.post(url, null ,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },

        async createMoneyOption({commit}, data){
            let url = store.state.api_url+`/api/salepoints/option/${data.id}`;
            return await axios.post(url, data ,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async deleteMoneyOption({commit}, id){
            let url = store.state.api_url+`/api/salepoints/option/delete/${id}`;
            return await axios.post(url, null ,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        }
    }
}