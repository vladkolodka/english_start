import { createReducer } from 'reduxsauce';

const { RESET_COURSES, APPEND_COURSE, SET_COURSE_LEARNING_STATUS, ASSIGN_COURSE } = require('../actions/courseActions').Types;

const initialState = [];

export default createReducer(initialState, {
  [RESET_COURSES]: (state, action) => action.courses,
  [APPEND_COURSE]: (state, action) => [...state, action.course],
  [SET_COURSE_LEARNING_STATUS]: (state, action) => state.map(c => c.id !== action.courseId ?
    c : { ...c, isStudied: action.status }),
  [ASSIGN_COURSE]: (state, action) => state.map(c => c.id !== action.courseId ?
    c : { ...c, isAdded: true})
});