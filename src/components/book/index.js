import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

class BookWindow extends React.Component {

  	render() {

  		  return (
    
		    <div className="container-fluid">
		        <div className="row content">

		          
			        <div className="col-sm-8">
			             
			            <BookList />
			        </div>   
		          <div className="col-sm-4 sidenav">	            
		              <BookForm />
		   			</div>
		    	
		   		

		        
		        </div>

		        
		    </div>
		      

		 )

	}
}

export default BookWindow;