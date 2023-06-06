import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

import user from '../modules/user';
import auth from '../modules/auth';
import country from '../modules/country';
import commission from '../modules/commission';
import sale_point from '../modules/sale_point';
import permission from '../modules/permission';
import sale from '../modules/sale';

export default new Vuex.Store({
    modules: {
        user,
        auth,
        country,
        commission,
        sale_point,
        permission,
        sale
    },
    state: {
        token: null,
        //api_url: 'https://multinivel3b.com',
        api_url: 'http://127.0.0.1:8000',
        session_user: {
            id: '',
            name: '',
            last_name: '',
            city_id: '',
            sp_user_code: '',
            sp_user_name: '',
            root_file: '',
            card_file: '',
            sponsors: {},
            permissions: {},
            pages: {},
            total_sp: 0,
            num_sponsors: 0,
        },
        alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"],
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        loadSessionUser(state, config) {
            /*if(!state.session_user.id && state.token || config && config.reload){
                let url = state.api_url + '/api/auth/me';
                axios.post(url, '',
                { headers: { "Authorization": "Bearer " + state.token} })
                .then((res)=>{
                    state.session_user = res.data.user;
                    state.loaded_user = 0;
                }).catch(err=>{
                    console.log(err)
                    if(err.response.status == 401) {
                        let url = state.api_url+'/api/auth/logout';
                        axios.post(url, '',
                        { headers: { "Authorization": "Bearer " + state.token} })
                        .then(() => {
                            state.token = null;
                            localStorage.removeItem('token');
                            window.location.href = '/';
                        }).catch(err => {
                            localStorage.removeItem('token');
                            window.location.href = '/';
                        })
                    }
                });
            } else {
                state.loaded_user ++;
            }
            */
        },
    },
    actions: {
        readToken({commit}){
            if(localStorage.getItem('token')){
                commit('setToken', localStorage.getItem('token'));
            } else {
                commit('setToken', null);
            }
        },
    },
})