import React from 'react';
import axios from 'axios';

class BookList extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	books: [],
	    	isLoaded: false,
	    	error: null
	    };
  	}

  	componentDidMount() {
  		axios.get('http://localhost:5000/books')
  		.then(response => {
    	// handle success
    		//console.log(response);
    		this.setState({
    			books: response.data,
    			isLoaded: true
    		});
    		
  		})
  		.catch(error => {
    	// handle error
    		this.setState({
    			isLoaded: false,
    			error: error
    		});
    		
  		})
  	}


  	render() {
  		const {books, isLoaded, error} = this.state;
  		return (

  			<div className="table-responsive">
  				<table className = "table">
	  				<thead>
					    <tr>
					      	<th scope="col">ID</th>
					      	<th scope="col">Book Title</th>
					      	<th scope="col">Book Author</th>
					      	<th scope="col">Year</th>
					    </tr>
					 </thead>
				  	<tbody>
				  		
			  				
		  				{books.map((book, index)=>{
		  					return (
		  						<tr key={index}>
			  						<th scope="row">{book.book_id}</th>
			  						<td>{book.book_title}</td>
			  						<td>{book.book_author}</td>
			  						<td>{book.book_year}</td>
		  						</tr>
		  					)
		  				})}
					

  					</tbody>

  				</table>
  	
  			</div>
		)


	}
}

export default BookList;