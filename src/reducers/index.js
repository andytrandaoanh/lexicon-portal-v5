import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';
import wordReducer from './wordReducer';
import bookReducer from './bookReducer';
import documentReducer from './documentReducer';
import definitionReducer from './definitionReducer';

export default combineReducers({
  wordReducer,
  quoteReducer,
  bookReducer,
  documentReducer,
  definitionReducer
});
