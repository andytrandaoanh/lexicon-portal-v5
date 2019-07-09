import axios from 'axios';

import { LOAD_DEFAULT_QUOTES, LOAD_QUOTES_BY_INDEX } from './';



export const loadDefaultQuotes = (bookID) => async dispatch => {
	const response = await axios.get("http://localhost:5000/quotes/book/" + bookID);
	//console.log(response);
  dispatch({type: LOAD_DEFAULT_QUOTES, payload: {data: response.data, bookID: bookID}})
};


export const loadQuotesByIndex = (bookID, indexNumber) => async dispatch => {
	//console.log('bookID:', bookID, 'indexNumber:', indexNumber);
	const response = await axios.get(`http://localhost:5000/quotes/${bookID}/index/${indexNumber}`);
	//console.log(response);
  dispatch({type: LOAD_QUOTES_BY_INDEX, payload: response.data})
};
