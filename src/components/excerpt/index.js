import React from 'react';
import BookList from './BookList';
import ExcerptView from './ExcerptView';


class ExcerptWindow extends React.Component {


  	render() {

  		  return (
    
		    <div className="container-fluid">
		        <div className="row content">
		          <div className="col-sm-4 sidenav">
		            <h2><small>Books</small></h2>
		            
		              <BookList />
		   			</div>
		    	
		   		
		          
			        <div className="col-sm-8">
			             
			            <ExcerptView />
			        </div>   
		        
		        </div>

		        
		    </div>
		      

		 )

	}
}


export default ExcerptWindow;