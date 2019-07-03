import { LOAD_DEFAULT_QUOTES} from '../actions';



const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function quoteReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_DEFAULT_QUOTES:
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