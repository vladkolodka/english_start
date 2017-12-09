import { create } from 'apisauce';
import config from './config';

// function url(controller, action, params) {
//   return `/${controller}/${action}${params ? '?' : ''}${Object.keys(params || []).map(k => `${k}=${params[k]}`).join('&')}`;
// }

const api = create({
  baseURL: config.server_url,
  withCredentials: true
});

const account = "Account";

export class Account {
  static login = (login, pass) => api.post(`/${account}/login`, {
    Login: login,
    Password: pass
  });

  static logout = () => api.get(`/${account}/logout`);
}