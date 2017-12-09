import { createReducer } from "reduxsauce";

const {SET_VIDEOS, SET_VIDEO} = require('../actions/videoActions').Types;

const initialState = {
  items: [],
  item: null,
  isLoading: false
};

export default createReducer(initialState, {
  [SET_VIDEOS]: (state, action) => Object.assign({}, state, {items: action.videos}),
  [SET_VIDEO]: (state, action) => Object.assign({}, state, {item: action.video})
});