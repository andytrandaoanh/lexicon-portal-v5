import axios from 'axios';

export const SEARCH_WORD = "SEARCH_WORD";
export const SELECT_WORD = "SELECT_WORD";
export const LOAD_BOOKS = "LOAD_BOOKS";
export const SELECT_BOOK = "SELECT_BOOK";
export const SAVE_BOOK_EDIT = "SAVE_BOOK_EDIT";
export const SAVE_BOOK_EDIT_SUCCESS = "SAVE_BOOK_SUCCESS";
export const SAVE_BOOK_EDIT_FAILURE = "SAVE_BOOK_FAILURE";
export const SAVE_BOOK_NEW = "SAVE_BOOK_NEW";
export const SAVE_BOOK_NEW_SUCCESS = "SAVE_BOOK_NEW_SUCCESS";
export const SAVE_BOOK_NEW_FAILURE = "SAVE_BOOK_NEW_FAILURE";


export const saveBookNew = (bookData) =>  dispatch => {

  axios.post('http://localhost:5000/book/new', bookData)
  .then(function (response) {
    dispatch ({type: SAVE_BOOK_NEW_SUCCESS, payload: response.data});
  })
  .catch(function (error) {
    dispatch ({type: SAVE_BOOK_NEW_FAILURE, payload: error})
  });

}




export const saveBookEdit = (bookData) =>  dispatch => {

  axios.post('http://localhost:5000/book/update', bookData)
  .then(function (response) {
    dispatch ({type: SAVE_BOOK_EDIT_SUCCESS, payload: response.data});
  })
  .catch(function (error) {
    dispatch ({type: SAVE_BOOK_EDIT_FAILURE, payload: error})
  });

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


