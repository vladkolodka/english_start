import { createReducer } from 'reduxsauce';

const {
  RESET_DICTIONARIES, APPEND_DICTIONARY, SET_DICTIONARY_LEARNING_STATUS, ARCHIVE_DICTIONARY,
  ADD_WORDS_TO_DICTIONARY, RESET_WORDS
} = require('../actions/dictionaryActions').Types;

const initialState = {
  dictionaries: [],
  words: []
};

export default createReducer(initialState, {
  [RESET_DICTIONARIES]: (state, action) => ({ ...state, dictionaries: action.dictionaries }),
  [APPEND_DICTIONARY]: (state, action) => ({ ...state, dictionaries: [...state.dictionaries, action.dictionary] }),
  [SET_DICTIONARY_LEARNING_STATUS]: (state, action) => state.map(d => d.id !== action.dictionaryId ?
    d : { ...d, learningStatus: action.status }),
  [ARCHIVE_DICTIONARY]: (state, action) => ({
    ...state,
    dictionaries: state.dictionaries.filter(v => v.id !== action.dictionaryId)
  }),
  [RESET_WORDS]: (state, action) => ({ ...state, words: action.words })
});