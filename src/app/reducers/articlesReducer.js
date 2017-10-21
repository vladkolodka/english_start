import { createReducer } from "reduxsauce";
const { SET_ARTICLES, SET_ARTICLE } = require('../actions/articleActions').Types;

const initialState = {
    items: [],
    item: null,
    isLoading: false
};

export default createReducer(initialState, {
    [SET_ARTICLES]: (state, action) => Object.assign({}, state, { items: action.articles }),
    [SET_ARTICLE]: (state, action) => Object.assign({}, state, { item: action.article })
});