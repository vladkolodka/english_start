import { createActions } from "reduxsauce";
import articlesData from "../data/articles";
import { Articles } from '../api';

export const { Types, Creators } = createActions({
  resetArticles: null,
  setArticles: ['articles'],
  setArticle: ['article']
});

export const loadArticle = (id) => (dispatch) => Articles.get(id).then(response => {
  if(response.status !== 200 || response.data.code !== 200) return;

    dispatch(Creators.setArticle(response.data.data));
});
export const loadLatestArticles = (count) => (dispatch) => Articles.latest(count).then(response => {
  if(response.status !== 200 || response.data.code !== 200) return;

  dispatch(Creators.setArticles(response.data.data));
});

export const loadCourseArticles = (courseId, padding) => (dispatch) => Articles.forCourse(courseId, padding).then(response => {
  if(response.status !== 200 || response.data.code !== 200) return;

  dispatch(Creators.setArticles(response.data.data));
});