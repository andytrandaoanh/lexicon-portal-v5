import { LOAD_BOOKS, SELECT_BOOK, SAVE_BOOK_EDIT} from '../actions'



const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedBook: null,
  saveEdit: null
};

export default function bookReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_BOOKS:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    items: action.payload
		  };
	
    case SELECT_BOOK:
     //console.log(action);
		return {
		    ...state,
		    selectedBook: action.payload
		  };
	
    case SAVE_BOOK_EDIT:
     //console.log(action);
		return {
		    ...state,
		    saveEdit: action.payload
		  };
	



	default:
		return state;

    }
 }