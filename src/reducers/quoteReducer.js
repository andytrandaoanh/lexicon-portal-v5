import { LOAD_DEFAULT_QUOTES, LOAD_QUOTES_BY_INDEX } from '../actions';



const initialState = {
  items: [],
  loading: false,
  error: null,
  bookID: null
};

export default function quoteReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_DEFAULT_QUOTES:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    items: action.payload.data,
		    bookID: action.payload.bookID,
		    error: null
		  };

    case LOAD_QUOTES_BY_INDEX:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    items: action.payload,
		    error: null
		  };




	default:
		return state;

  }
}