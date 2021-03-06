import React, { Component } from "react";
import { connect } from "react-redux";
import { saveBookEdit, saveBookNew } from "../../actions/books";
import { bindActionCreators } from "redux";


class BookForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	
    		book_id: '',
    		book_title: '',
    		book_author: '',
    		book_year: '',
    		isEdit: false
	    	
	    };
	    this.handleSubmit = this.handleSubmit.bind(this)
	    this.handleChange = this.handleChange.bind(this)
	    this.setAddNewMode = this.setAddNewMode.bind(this)
	}

	setAddNewMode(){
		this.setState({
			book_id: '',
    		book_title: '',
    		book_author: '',
    		book_year: '',
    		isEdit: false
	    	
		});
	}

	componentWillReceiveProps(nextProps) {

		if (nextProps.selectedBook) {
			const item = nextProps.items.find(book => book.book_id == nextProps.selectedBook); 
			this.setState ({...item});
			this.setState ({isEdit: true});

		}
		

	}

	handleChange(event){
		
		this.setState({[event.target.id] : event.target.value})
		//console.log(this.state.item[event.target.id])

	}

	handleSubmit(event){
		//console.log('state.isEdit: ', this.state.isEdit)
		//this.props.saveBookEdit(this.state);
		if (this.state.isEdit) {
			this.props.saveBookEdit(this.state);
		}

		else {
			this.props.saveBookNew(this.state);
		}
    	event.preventDefault();
    	window.location.reload(); 
	}
  	
  	render() {

  		const isEdit = this.state.isEdit
  		const headerContent = this.state.isEdit ? "Edit book information" : "Adding a new book" 
			 		  
		  		 return (



		  		 	<div>
		  		 		<h4>Change Book Information</h4>
		  		 		<div>
		  		 			<span>{headerContent}</span>
		  		 			{ 	isEdit
        						? <span className="span4 pull-right">
        							<button 
        								className="btn btn-success btn-sm"
										onClick = {this.setAddNewMode}
        							>Add New Book</button>
        						   </span>
        						: <span></span>
      						}
		  		 		</div>
		    
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
					</div> 

			 	)
	}
	
}


function mapStateToProps(state) {
  return {
    items: state.bookReducer.items,
    selectedBook: state.bookReducer.selectedBook
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveBookEdit, saveBookNew}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
