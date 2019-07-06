import React from 'react';
import QuoteDefinition from './QuoteDefinition';
import QuoteList from './QuoteList';


class QuoteWindow extends React.Component {


	constructor(props) {
	    super(props);

	     
	}


  	render() {
  		  const params  =  this.props.match.params;
  		  

  		  return (
    
		    <div className="container-fluid">
		        <div className="row content">
		          <div className="col-sm-9 ">
		            
		              <QuoteList params={{bookID: params.bookid, indexNum: params.indexnum}}/>
		   			</div>
		    	
		   		
		          
			        <div className="col-sm-3 sidenav">
			             
			            <QuoteDefinition  />
			        </div>   
		        
		        </div>

		        
		    </div>
		      

		 )

	}
}


export default QuoteWindow;