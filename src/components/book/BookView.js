import React from 'react';

class BookView extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	books: [],
	    	isLoaded: false
	    };
  	}

  	
  	render() {

  		  return (
    
			<h4>Book View</h4>

		 )

	}
	
}

export default BookView;