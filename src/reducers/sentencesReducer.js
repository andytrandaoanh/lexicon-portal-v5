import { SELECT_WORD } from '../actions'



const initialState = {
  items: [],
  loading: false,
  error: null,
  search: ''
};

export default function wordsReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_WORD:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    items: action.payload.payload,
		    search: action.payload.search
		  };
	default:
		return state;

    }
 }