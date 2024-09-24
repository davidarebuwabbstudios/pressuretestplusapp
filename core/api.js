import axios from 'axios';
import { isEmpty, isObject } from 'underscore';

const API_URL = 'https://ptplus-lyndon.positive-dedicated.net';

//Helpers

const getApiUrl = () => `${API_URL}/api`;

const api = axios.create({
    baseURL: getApiUrl(),
});


// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

const formatParams = (payload, key) => {
    let params = payload;
    if(!isObject(payload)) {
        params = {};
        params[key || 'id'] = payload;
    }
    return params;
}

function fetchApi(opts, headers) {
    let data = (opts.method.toUpperCase() === 'GET') ? null : opts.body
    console.log('request url:', opts.url)
    const options = {
        method: opts.method,
        url: opts.url,
        params: opts.params,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    };


if (opts.method.toUpperCase() !== 'GET') {
    options.data = data;
}

if (!isEmpty(headers)) {
    options.headers = { ...options.headers, ...headers};
}

    return api(options);
}


export {
    getApiUrl,
    formatParams,
    fetchApi,
};


