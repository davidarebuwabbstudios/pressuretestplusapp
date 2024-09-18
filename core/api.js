import axios from 'axios';
import { isEmpty, isObject } from 'underscore';

const API_URL = 'http://localhost:8080';

//Helpers

const getApiUrl = () => `${API_URL}/api`;

const api = axios.create({
    baseURL: getApiUrl(),
});

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


