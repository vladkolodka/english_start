import { createReducer } from "reduxsauce";
const { SET_ARTICLES } = require('../actions/articleActions').Types;

const initialState = {
    items: [],
    isLoading: false
};

export default createReducer(initialState, {
    [SET_ARTICLES]: (state, action) => Object.assign({}, state, { items: action.articles })
});