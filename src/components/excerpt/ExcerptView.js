import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class ExcerptView extends React.Component {



  render() {
      

      if (this.props.bookID){     

  		  return (
          <div>
            {this.props.items.map((item,index)=>(

              <div key={index} className="well well-sm">
                <div key={index + 'child'} className="bookContents"> {item.sent_content}</div>
              </div>
            ))
          }

          
          <Link className="btn btn-lg btn-primary pull-right" to={`/quotes/${this.props.bookID}/0`}>
                    View Pages
          </Link>
          
         
          </div>

          
          
		    )
      } else {
         return <div>No items</div>
      }

	}
}

function mapStateToProps(state) {
  return {
      items: state.quoteReducer.items,
      bookID: state.quoteReducer.bookID

  };
};

export default connect(mapStateToProps, null)(ExcerptView);
