import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:8081/api',
  withCredentials: true
});

const account = "Account";
const course = "Course";
const article = "Article";
const dictionary = "Dictionary";
const word = "Word";

export class Account {
  static login = (login, pass) => api.post(`/${account}/login`, {
    Login: login,
    Password: pass
  });

  static logout = () => api.get(`/${account}/logout`);

  static whoAmI = () => api.get(`/${account}/whoAmI`);
}

const coursesCount = 6;

export class Courses {
  static all = (padding) => api.get(`/${course}/all`, {
    offset: padding * coursesCount,
    count: coursesCount
  });
  static own = () => api.get(`/${course}/own`);

  static assign = courseId => api.get(`/${course}/assign`, { courseId });
  static setLearnStatus = (courseId, status) => api.get(`/${course}/SetLearnStatus`, { courseId, status });
}

const articlesCount = 6;

export class Articles {
  static forCourse = (courseId, padding) => api.get(`/${article}/Index`, {
    courseId,
    offset: padding * articlesCount,
    count: coursesCount
  });

  static get = (articleId) => api.get(`/${article}/Get`, { data: articleId });
}

export class Dictionaries {
  static search = (data) => api.get(`/${dictionary}/Search`, { data });

  static setStatus = (dictionaryId, status) => api.get(`/${dictionary}/SetStatus`, { dictionaryId, status });

  static archive = (dictionaryId, archived) => api.get(`/${dictionary}/Archive`, { dictionaryId, archived });

  static own = () => api.get(`/${dictionary}/Own`);

  static addWords = (dictionaryId, words) => api.post(`/${dictionary}/AddWords`, {
    DictionaryId: dictionaryId,
    Words: words
  });
}

export class Words {
  static forDictionary = (dictionaryId) => api.get(`/${word}/ForDictionary`, { dictionaryId });

  static notLearned = (dictionaryId, count) => api.get(`/${word}/NotLearned`, { dictionaryId, count });

  static setStages = (data) => api.post(`/${word}/SetStages`, data);
}