import { createActions } from "reduxsauce";
import { Dictionaries } from '../api';

export const { Types, Creators } = createActions({
  resetDictionaries: ['dictionaries'],
  appendDictionary: ['dictionary'],
  setDictionaryLearningStatus: ['dictionaryId', 'status'],
  archiveDictionary: ['dictionaryId'],
  addWordsToDictionary: ['dictionaryId', 'words'],
  resetWords: ['words']
});

export const search = (query) => dispatch => Dictionaries.search(query).then(response => {
  if (response.status !== 200) return;

  dispatch(Creators.resetDictionaries(response.data.data));
});

export const own = () => dispatch => Dictionaries.own().then(response => {
  if (response.status !== 200) return;

  console.log(response);

  dispatch(Creators.resetDictionaries(response.data.data));
});

export const setLearnStatus = (dictionaryId, status) => dispatch => Dictionaries.setStatus(dictionaryId, status).then(response => {
  if (response.status !== 200) return;

  dispatch(Creators.setDictionaryLearningStatus(dictionaryId, status));
});

export const archive = (dictionaryId) => dispatch => Dictionaries.archive(dictionaryId, true).then(response => {
  if (response.status !== 200) return;

  dispatch(Creators.archiveDictionary(dictionaryId));
});

export const addWords = (dictionaryId, words) => dispatch => Dictionaries.addWords(dictionaryId, words).then(response => {
  if (response.status !== 200) return;

  dispatch(Creators.addWordsToDictionary(dictionaryId, response.data.data));
});