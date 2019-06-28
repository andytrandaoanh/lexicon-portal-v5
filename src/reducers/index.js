import { combineReducers } from 'redux';
import sentencesReducer from './sentencesReducer';
import wordsReducer from './wordsReducer';
import bookReducer from './bookReducer';


export default combineReducers({
  wordsReducer,
  sentencesReducer,
  bookReducer
});
