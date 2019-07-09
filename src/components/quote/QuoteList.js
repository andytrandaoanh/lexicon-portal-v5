import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadQuotesByIndex } from "../../actions/quotes";
import ClickableContent from '../shared/ClickableContent';



class QuoteList extends React.Component {

	constructor(props) {
	    super(props);
      this.handleNextPage = this.handleNextPage.bind(this);
      this.handleSpanClick = this.handleSpanClick.bind(this);
	}


  handleSpanClick(word){
    console.log('userclick:', word);
  }

  handleNextPage(){

    
    let curHref = window.location.href;
    let pos = curHref.lastIndexOf('/');
    let path = curHref.slice(0, pos);
    pos = path.lastIndexOf('/');
    let basePath = path.slice(0,pos);
    let lastItem = this.props.items[this.props.items.length - 1].sent_num;  
    let newPath = basePath + '/' + this.props.params.bookID + '/' + lastItem;
    //console.log('newPath:', newPath);

    window.location.assign(newPath)
  }
  componentDidMount() {
      this.props.loadQuotesByIndex(this.props.params.bookID, this.props.params.indexNum)

  }


  processContent(){
      return (this.props.items.map((item,index)=>(

              <div key={item.sent_id + 's' + index + 'well'} className="well well-sm">
                <div key={item.sent_id + 's' + index + 'book_content'} className="bookContents"> 
                    <ClickableContent 
                      key = {item.sent_id + 's' + index + 'component'}
                      textContent = {item.sent_content} 
                      wordList = {this.props.words}
                      sentID = {item.sent_id}
                      sentNum = {item.sent_num}
                      handleClick = {this.handleSpanClick}
                    />
                </div>
              </div>
            ))
          )
  }
  
  render() {




  		return (
        <div>
            
          {this.processContent()}
          
          <button type="button" 
            className="btn btn-lg btn-primary pull-right" 
            onClick={this.handleNextPage}>
            Next Page
          </button>
          
         
        </div>
      )

	}
}

const mapStateToProps = state => ({
    items: state.quoteReducer.items,
    loading: state.quoteReducer.loading,
    bookID : state.quoteReducer.bookID,
    error: state.quoteReducer.error,
    words: state.quoteReducer.words

});



const mapDispatchToProps = dispatch => {
  return bindActionCreators(
  	{ loadQuotesByIndex
  	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteList);
