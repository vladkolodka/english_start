import { createActions } from "reduxsauce";
import { Words } from '../api';

export const { Types, Creators } = createActions({
  loadWords: ['words'],

});

export const load = (dictionaryId) => dispatch => Words.forDictionary(dictionaryId).then(response => {
  if (response.status !== 200) return;

  dispatch(Creators.loadWords(response.data.data));
});

export const notLearned = (dictionaryId) => dispatch => Words.notLearned(dictionaryId, 7).then(response => {
  if (response.status !== 200) return;
  dispatch(Creators.loadWords(response.data.data));

  return response.data.data.length
});
export const setStages = (data) => dispatch => Words.setStages(data).then(response => {
  if (response.status !== 200) return;
  dispatch(Creators.loadWords([]));
});