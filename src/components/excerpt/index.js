import React from 'react';
import BookList from './BookList';
import BookView from './BookView';


class ExcerptWindow extends React.Component {


  	render() {

  		  return (
    
		    <div className="container-fluid">
		        <div className="row content">
		          <div className="col-sm-3 sidenav">
		            <h2><small>Books</small></h2>
		            
		              <BookView />
		   			</div>
		    	
		   		
		          
			        <div className="col-sm-9">
			             
			            <BookList />
			        </div>   
		        
		        </div>

		        
		    </div>
		      

		 )

	}
}


export default ExcerptWindow;