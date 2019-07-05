import axios from 'axios';

import { LOAD_BOOKS } from './';
import {SELECT_BOOK, SAVE_BOOK_EDIT, SAVE_BOOK_EDIT_SUCCESS, SAVE_BOOK_EDIT_FAILURE} from './';
import {SAVE_BOOK_NEW, SAVE_BOOK_NEW_SUCCESS, SAVE_BOOK_NEW_FAILURE} from './';



export const saveBookNew = (bookData) =>  dispatch => {

  axios.post('http://localhost:5000/book/new', bookData)
  .then(function (response) {
    dispatch ({type: SAVE_BOOK_NEW_SUCCESS, payload: response.data});
  })
  .catch(function (error) {
    dispatch ({type: SAVE_BOOK_NEW_FAILURE, payload: error})
  });

};




export const saveBookEdit = (bookData) =>  dispatch => {

  axios.post('http://localhost:5000/book/update', bookData)
  .then(function (response) {
    dispatch ({type: SAVE_BOOK_EDIT_SUCCESS, payload: response.data});
  })
  .catch(function (error) {
    dispatch ({type: SAVE_BOOK_EDIT_FAILURE, payload: error})
  });

};




export const selectBook = (bookID) => {
  return ({type: SELECT_BOOK, payload: bookID})
};


export const loadBooks = () => async dispatch => {
	const response = await axios.get("http://localhost:5000/books");
	//console.log(response);
  dispatch({type: LOAD_BOOKS, payload: response.data})
};
