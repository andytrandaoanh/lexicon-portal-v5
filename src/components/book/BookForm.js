import React, { Component } from "react";
import { connect } from "react-redux";
import { saveBookEdit } from "../../actions";
import { bindActionCreators } from "redux";


class BookForm extends React.Component {
	constructor(props) {
	    super(props);
	}

  	
  	render() {
  		  if (this.props.selectedBook) {
	  		  return (
	    
				 <form>
					  <div className="form-group">
					    <label htmlFor="book_title">Book Title</label>
					    <input type="text" className="form-control" id="book_title" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="book_author">Author</label>
					    <input type="text" className="form-control" id="book_author" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="book_year">Year</label>
					    <input type="number" className="form-control" id="book_year" />
					  </div>
					  
					  <button type="submit" className="btn btn-primary">Submit</button>
				</form> 

			 )
		}
		 else {
			
			return <div></div>

		 }

	}
	
}



const mapStateToProps = state => ({
	if (state.bookReducer.selected) return {
		selectedBook: state.bookReducer.selected,
    	item:  state.bookReducer.items.filter(book => book.book_id === selectedBook )

	}

	else {

		return { selectedBook: null, item: {}}

	}

});



const mapDispatchToProps = dispatch => {
  return bindActionCreators(
  	{ saveBookEdit }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);


