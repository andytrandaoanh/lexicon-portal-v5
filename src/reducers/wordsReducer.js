import { SEARCH_WORD } from '../actions'



const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function wordsReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_WORD:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    items: action.payload
		  };
	default:
		return state;

    }
 }