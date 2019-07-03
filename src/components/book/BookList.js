import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBooks, selectBook } from "../../actions/books";
import { bindActionCreators } from "redux";



class BookList extends React.Component {

	constructor(props) {
	    super(props);
	}

  	componentDidMount() {
  		this.props.loadBooks()
  	}


  	render() {
  		
  		const { error, loading, items, selectBook } = this.props;

  		return (

  			<div className="table-responsive">
  				<table className = "table">
	  				<thead>
					    <tr>
					      	<th scope="col">ID</th>
					      	<th scope="col">Book Title</th>
					      	<th scope="col">Book Author</th>
					      	<th scope="col">Year</th>
					      	<th scope="col">Edit</th>
					    </tr>
					 </thead>
				  	<tbody>
				  		
			  				
		  				{items.map((item, index)=>{
		  					return (
		  						<tr key={index}>
			  						<th scope="row">{item.book_id}</th>
			  						<td>{item.book_title}</td>
			  						<td>{item.book_author}</td>
			  						<td>{item.book_year}</td>
			  						<td><button 
			  							type="button" 
			  							className="btn btn-warning"
			  							onClick={() => selectBook(item.book_id)}
			  							>Edit</button></td>
		  						</tr>
		  					)
		  				})}
					

  					</tbody>

  				</table>
  	
  			</div>
		)


	}
}



const mapStateToProps = state => ({
    items: state.bookReducer.items,
    loading: state.bookReducer.loading,
    error: state.bookReducer.error
});



const mapDispatchToProps = dispatch => {
  return bindActionCreators(
  	{ selectBook,
  	  loadBooks
  	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);


