import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadQuotesByIndex } from "../../actions/quotes";

class QuoteDefinition extends React.Component {

	constructor(props) {
	    super(props);
	}



  	render() {

  		//console.log(this.props.words)
  		

  		return (

            <div>

              Definitions       
          	</div>
  		)

	}
}

const mapStateToProps = state => ({
    words: state.quoteReducer.words.sort((a, b) => (a.sent_num > b.sent_num) ? 1 : -1),
    bookID : state.quoteReducer.bookID


});

export default connect(mapStateToProps, null)(QuoteDefinition);

