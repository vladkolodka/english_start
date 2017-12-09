import { createActions } from "reduxsauce";
import { Account } from '../api';

export const {Types, Creators} = createActions({
  authorize: ['profile'],
  logout: null
});

export const tryLogin = (login, password) => (dispatch) => Account.login(login, password).then(response => {
  if(response.status !== 200) return;

  dispatch(Creators.authorize(response.data.data));
});

export const logout = () => (dispatch) => Account.logout().then(response => {
  if(response.status !== 200) return;

  dispatch(Creators.logout());
});