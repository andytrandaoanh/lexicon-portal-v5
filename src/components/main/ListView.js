// src/components/ListView.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Highlighted from '../shared/Highlighted';




class ListView extends Component {



  renderList() {
    return this.props.items.map((item,index) => {
      return (
        <div   key={index}  className="well well-sm">                      
                
               <Highlighted key={item.book_id + item.sent_num + 'h'} text={item.sent_content} highlight={this.props.search} />
               <p className = "notes" key={item.book_id + item.sent_num + 'n'}>
               Book Title: {item.book_title}, Author: {item.book_author}, Year of Publication: {item.book_year}
               </p>

         </div>

                    
      )
    })};
       


  render() {
    return (
      <div>
         <h2>{this.props.search}</h2>

        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside Component
  return {
    items: state.documentReducer.items,
    search: state.documentReducer.search
  };
};



export default connect(mapStateToProps, null)(ListView);
