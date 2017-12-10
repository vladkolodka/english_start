import { createActions } from "reduxsauce";
import { Courses } from '../api';

export const {Types, Creators} = createActions({
  resetCourses: ['courses'],
  appendCourse: ['course'],
  setCourseLearningStatus: ['courseId', 'status'],
  assignCourse: ['courseId']
});

export const loadCourses = (page) => dispatch => Courses.all(page).then(response => {
  if (response.status !== 200) return;

  console.log(response);

  dispatch(Creators.resetCourses(response.data.data));
});

export const loadUserCourses = () => (dispatch) => Courses.own().then(response => {
  if (response.status !== 200) return;

  dispatch(Creators.resetCourses(response.data.data));
});

export const setLearnStatus = (courseId, status) => dispatch => Courses.setLearnStatus(courseId, status).then(response => {
  if (response.status !== 200 || response.data.data !== true) return;

  dispatch(Creators.setCourseLearningStatus(courseId, status));
});

export const assign = (courseId) => dispatch => Courses.assign(courseId).then(response => {
  if (response.status !== 200 || response.data.data !== true) return;

  dispatch(Creators.assignCourse(courseId));
});