import React, { Component } from "react";
import { connect } from "react-redux";
import { saveBookEdit } from "../../actions";
import { bindActionCreators } from "redux";


class BookForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	
    		book_id: '',
    		book_title: '',
    		book_author: '',
    		book_year: ''
	    	
	    };
	    this.handleSubmit = this.handleSubmit.bind(this)
	    this.handleChange = this.handleChange.bind(this)
	}

	componentWillReceiveProps(nextProps) {

		if (nextProps.selectedBook) {
			const item = nextProps.items.find(book => book.book_id == nextProps.selectedBook); 
			this.setState ({...item});

		}
		

	}

	handleChange(event){
		
		this.setState({[event.target.id] : event.target.value})
		//console.log(this.state.item[event.target.id])

	}

	handleSubmit(event){
		this.props.saveBookEdit(this.state);
    	event.preventDefault()
	}
  	
  	render() {

  			if (this.props.selectedBook) {

  				 		  
		  		 return (
		    
					 <form onSubmit = {this.handleSubmit}>
						  <div className="form-group">
						    <label htmlFor="book_id">Book ID</label>
						    <input 
						    	type="text" 
						    	className="form-control" 
						    	id="book_id" 
						    	value={this.state.book_id} 
						    	disabled={true} />
						  </div>
						  <div className="form-group">
						    <label htmlFor="book_title">Book Title</label>
						    <input 
						    	type="text" 
						    	className="form-control" 
						    	id="book_title" 
						    	value={this.state.book_title}
						    	onChange={this.handleChange}
						    	/>
						  </div>
						  <div className="form-group">
						    <label htmlFor="book_author">Author</label>
						    <input 
						    	type="text" 
						    	className="form-control" 
						    	id="book_author" 
						    	value={this.state.book_author} 
						    	onChange={this.handleChange}
						    	/>
						  </div>
						  <div className="form-group">
						    <label htmlFor="book_year">Year</label>
						    <input 
						    	type="text" 
						    	className="form-control" 
						    	id="book_year" 
						    	value={this.state.book_year}
						    	onChange={this.handleChange} 
						    	/>
						  </div>
						  
						  <button type="submit" className="btn btn-primary">Submit</button>
					</form> 

			 	)
			}

			else { return <h1></h1> }
	}
	
}


function mapStateToProps(state) {
  return {
    items: state.bookReducer.items,
    selectedBook: state.bookReducer.selectedBook
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveBookEdit}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
