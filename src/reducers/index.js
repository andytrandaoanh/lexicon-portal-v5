import { combineReducers } from 'redux';
import sentencesReducer from './sentencesReducer';
import wordsReducer from './wordsReducer';

export default combineReducers({
  wordsReducer,
  sentencesReducer
});
