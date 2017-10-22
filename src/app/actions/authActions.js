import { createActions } from "reduxsauce";
import users from "../data/users";

export const { Types, Creators } = createActions({
    authorize: ['profile'],
    logout: null
});

export const tryLogin = (login, password) => (dispatch) => {

    let user = users.filter(u => u.login == 'user1');

    if (user.length != null) dispatch(Creators.authorize(user[0]));

    // TODO handle error
};