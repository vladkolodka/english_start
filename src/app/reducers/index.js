import articlesReducer from "./articlesReducer";
import authReducer from "./authReducer";
import videosReducer from "./videosReducer";
import coursesReducer from "./coursesReducer";
import dictionaryReducer from "./dictionaryReducer";

export default {
  articles: articlesReducer,
  auth: authReducer,
  videos: videosReducer,
  courses: coursesReducer,
  dictionaries: dictionaryReducer
};