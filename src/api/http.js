import * as axiosHttp from './axios';

export function get(url, params = {}, headersExtras = {}, options = {}){
    return axiosHttp.request("GET", url, {}, getHeaders(headersExtras, options), params)
}

export function post(url, body = {}, params = {}, headersExtras = {}, options = {}) {
    return axiosHttp.request("POST", url, body, getHeaders(headersExtras, options), params);
}

export function _delete(url, body = {}, params = {}, headersExtras = {}, options = {}) {
    return axiosHttp.request("DELETE", url, body, getHeaders(headersExtras, options), params);
}

export function put(url, body = {}, params = {}, headersExtras = {}, options = {}) {
    return axiosHttp.request("PUT", url, body, getHeaders(headersExtras, options), params);
}




export function getHeaders(headersExtras = {}, options = {}) {
    let headers = {
        'Content-Type':'application/json',
        // "Access-Control-Allow-Origin": '*',
      ...headersExtras,
    };
        
    return headers;
}

