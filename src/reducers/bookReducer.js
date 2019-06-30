import { LOAD_BOOKS, SELECT_BOOK, SAVE_BOOK_EDIT_SUCCESS, SAVE_BOOK_EDIT_FAILURE} from '../actions';
import { SAVE_BOOK_NEW_SUCCESS, SAVE_BOOK_NEW_FAILURE} from '../actions';



const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedBook: null,
  saveEditSuccess: false,
  saveEditError: null,
  saveNewSuccess: false,
  saveNewError: null
};

export default function bookReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_BOOKS:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    items: action.payload,
		    error: null,
		    selectedBook: null,
		    saveEdit: null

		  };
	
    case SELECT_BOOK:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    error: null,
		    selectedBook: action.payload,
		    saveEdit: null
		  };
	
    case SAVE_BOOK_EDIT_SUCCESS:
     //console.log(action);
		return {
		    ...state,
		    loading: true,
		    error: null,
		    saveEditSuccess: true
		  };

    case SAVE_BOOK_EDIT_FAILURE:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    error: null,
		    saveEditSuccess: false,
		    saveEditError: action.payload
		  };

    case SAVE_BOOK_NEW_SUCCESS:
     //console.log(action);
		return {
		    ...state,
		    saveNewSuccess: true
		  };
    case SAVE_BOOK_EDIT_FAILURE:
     //console.log(action);
		return {
		    ...state,
		    saveNewError: action.payload
		  };		  

	default:
		return state;

    }
 }