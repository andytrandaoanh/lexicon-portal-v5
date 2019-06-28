import axios from 'axios';

export const SEARCH_WORD = "SEARCH_WORD";
export const SELECT_WORD = "SELECT_WORD";
export const LOAD_BOOKS = "LOAD_BOOKS";
export const SELECT_BOOK = "SELECT_BOOK";
export const SAVE_BOOK_EDIT = "SAVE_BOOK_EDIT";


export const saveBookEdit = (bookID) => {
  return ({type: SAVE_BOOK_EDIT, payload: bookID})
}


export const selectBook = (bookID) => {
  return ({type: SELECT_BOOK, payload: bookID})
}

export const loadBooks = () => async dispatch => {
	const response = await axios.get("http://localhost:5000/books");
	//console.log(response);
  dispatch({type: LOAD_BOOKS, payload: response.data})
};



export const searchWord = (word) => async dispatch => {
	const response = await axios.get("http://localhost:5000/query/" + word);
	//console.log(response);
  dispatch({type: SEARCH_WORD, payload: response.data})
};


export const selectWord = (word) => async dispatch => {
	const response = await axios.get("http://localhost:5000/detail/" + word);
	//console.log(response);
	const payload = {search: word, payload: response.data};
  dispatch({type: SELECT_WORD, payload: payload})
};


