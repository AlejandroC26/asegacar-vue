import axios from 'axios';
import store from './index.js';

const oApiClient = axios.create({
    baseURL: `${store.state.api_url}/api/`
})

const oConfigBase = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${store.state.token}`,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache, no-store',
    }
}

oApiClient.interceptors.response.use(response => {
    return response
  }, (error) => {
    console.log(error)
    return error.response
})

oApiClient.interceptors.request.use(config => {
    config.baseURL = `${store.state.api_url}/api/`
    if (store.state.token !== '') {
      config.headers.Authorization = `Bearer ${store.state.token}`
    }
    return config
})


export default {
    onAxiosGet(sUrl) {
        delete oConfigBase.responseType
        return oApiClient.get(sUrl, oConfigBase);
    },
    onAxiosPost(sUrl, oBody) {
        delete oConfigBase.responseType
        return oApiClient.post(sUrl, oBody, oConfigBase);
    },
    onAxiosPut(sUrl, oBody) {
        delete oConfigBase.responseType
        return oApiClient.put(sUrl, oBody, oConfigBase);
    },
    onAxiosDelete(sUrl, oBody) {
        delete oConfigBase.responseType
        return oApiClient.delete(sUrl, oBody, oConfigBase);
    },
    onAxiosPostLogin(sUrl, oBody) {
        oConfigBase.headers.Authorization = '';
        delete oConfigBase.responseType
        return oApiClient.post(sUrl, oBody, oConfigBase);
    },

    async onAxiosPostWithfile(sUrl, oBody) {
        const configWithFile = { ...oConfigBase };
        configWithFile.headers['Content-Type'] = 'multipart/form-data';
        return oApiClient.post(sUrl, oBody, configWithFile)
    },
    
    async onAxiosGetToFile(sUrl) {
        const configWithFile = { ...oConfigBase };
        configWithFile.responseType = "blob";
        return oApiClient.get(sUrl, configWithFile);
    },
    async onAxiosPostToFile(sUrl, oBody) {
        const configWithFile = { ...oConfigBase };
        configWithFile.responseType = "blob";
        return oApiClient.post(sUrl, oBody, configWithFile);
    }
}







