/*
 * action types
 */
import axios from 'axios';

export const SEARCH_WORD = "SEARCH_WORD";
export const SELECT_WORD = "SELECT_WORD";

/*
 * action creators
 */


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


/*
export const selectWord = (word) => {
	return {type: SELECT_WORD, payload: word};
};
*/

