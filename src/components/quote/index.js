import React from 'react';
import QuoteDefinition from './QuoteDefinition';
import QuoteList from './QuoteList';


class QuoteWindow extends React.Component {


	constructor(props) {
	    super(props);
	}

  	render() {
  		  console.log(this.props.match);
  		  return (
    
		    <div className="container-fluid">
		        <div className="row content">
		          <div className="col-sm-9 sidenav">
		            <h2><small>Books</small></h2>
		            
		              <QuoteList />
		   			</div>
		    	
		   		
		          
			        <div className="col-sm-3">
			             
			            <QuoteDefinition />
			        </div>   
		        
		        </div>

		        
		    </div>
		      

		 )

	}
}


export default QuoteWindow;