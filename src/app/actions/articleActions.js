import { createActions } from "reduxsauce";
import articlesData from "../data/articles";

export const { Types, Creators } = createActions({
    resetArticles: null,
    setArticles: ['articles'],
    setArticle: ['article']
});

export const loadLatestArticles = () => (dispatch) => {
    // dispatch(Creators.resetArticles());

    // toggle TODO loading indicator

    dispatch(Creators.setArticles(articlesData));
};

export const loadArticle = (id) => (dispatch) => {
    dispatch(Creators.setArticle(articlesData.filter(v => v.id == id)[0]));
};