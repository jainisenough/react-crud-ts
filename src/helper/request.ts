import { ajax } from 'rxjs/ajax';

export const getJSON = (url: string, ...args: any[]) => ajax.getJSON(url, ...args);
export const post = (url: string, ...args: any[]) => ajax.post(url, ...args);
