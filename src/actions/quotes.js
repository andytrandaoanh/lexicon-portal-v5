import axios from 'axios';

import { LOAD_DEFAULT_QUOTES } from './';



export const loadDefaultQuotes = (bookID) => async dispatch => {
	const response = await axios.get("http://localhost:5000/quotes/book/" + bookID);
	//console.log(response);
  dispatch({type: LOAD_DEFAULT_QUOTES, payload: {data: response.data, bookID: bookID}})
};


export const loadNextQuotes = (bookID, indexNumber) => async dispatch => {
	const response = await axios.get("http://localhost:5000/quotes/book/" + bookID + "/" + indexNumber);
	//console.log(response);
  dispatch({type: LOAD_DEFAULT_QUOTES, payload: response.data})
};
