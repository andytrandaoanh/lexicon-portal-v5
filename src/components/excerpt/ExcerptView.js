import React, { Component } from "react";
import { connect } from "react-redux";


class ExcerptView extends React.Component {



  render() {

      if (this.props.items){     

  		  return (
          <div>
            {this.props.items.map((item,index)=>(

              <div key={index} className="well well-sm">
                <div key={index + 'child'} className="bookContents"> {item.sent_content}</div>
              </div>
            ))
          }

          </div>
          
		    )
      } else {
         return <div>No items</div>
      }

	}
}

function mapStateToProps(state) {
  return {
      items: state.quoteReducer.items
  };
};

export default connect(mapStateToProps, null)(ExcerptView);
