import { createActions } from "reduxsauce";
import articlesData from "../data/articles";

export const { Types, Creators } = createActions({
    resetArticles: null,
    setArticles: ['articles']
});

export const loadLatestArticles = () => (dispatch) => {
    // dispatch(Creators.resetArticles());

    // toggle TODO loading indicator

    dispatch(Creators.setArticles(articlesData));
};