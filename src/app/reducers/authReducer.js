import { createReducer } from "reduxsauce";
const { AUTHORIZE, LOGOUT } = require('../actions/authActions').Types;

const initialState = {
    profile: null,
    isAuthorized: false
};

export default createReducer(initialState, {
    [AUTHORIZE]: (state, action) => Object.assign({}, state, { profile: action.profile, isAuthorized: true }),
    [LOGOUT]: (state, action) => Object.assign({}, state, { profile: null, isAuthorized: false })
});