import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadQuotesByIndex } from "../../actions/quotes";
import { Link } from 'react-router-dom';


class QuoteList extends React.Component {

	constructor(props) {
	    super(props);
      this.handleClick = this.handleClick.bind(this)
	}

  handleClick(){

    
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
  
  render() {




  		return (
              <div>
            {this.props.items.map((item,index)=>(

              <div key={index} className="well well-sm">
                <div key={index + 'child'} className="bookContents"> {item.sent_content}</div>
              </div>
            ))
          }

          
          <button type="button" className="btn btn-lg btn-primary" onClick={this.handleClick}>Next</button>
          
         
          </div>
      )

	}
}

const mapStateToProps = state => ({
    items: state.quoteReducer.items,
    loading: state.quoteReducer.loading,
    error: state.quoteReducer.error
});



const mapDispatchToProps = dispatch => {
  return bindActionCreators(
  	{ loadQuotesByIndex
  	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteList);
