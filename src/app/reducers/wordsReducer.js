import { createReducer } from "reduxsauce";

const {LOAD_WORDS} = require('../actions/wordActions').Types;

const initialState = [];

export default createReducer(initialState, {
  [LOAD_WORDS]: (state, action) => action.words
});