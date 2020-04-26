import { ajax } from 'rxjs/ajax';

const addDefaultHeaders = (headers: {} = {}) => ({ 'Content-Type': 'application/json', ...headers });
export const getJSON = (url: string, headers?: {}) => ajax.getJSON(url, addDefaultHeaders(headers));
export const get = (url: string, headers?: {}) => ajax.get(url, addDefaultHeaders(headers));
export const head = (url: string, headers?: {}) =>
  ajax({
    method: 'HEAD',
    url,
    headers: addDefaultHeaders(headers)
  });
export const post = (url: string, data: {}, headers?: {}) => ajax.post(url, data, addDefaultHeaders(headers));
export const put = (url: string, data: {}, headers?: {}) => ajax.put(url, data, addDefaultHeaders(headers));
export const remove = (url: string, headers?: {}) => ajax.delete(url, addDefaultHeaders(headers));
