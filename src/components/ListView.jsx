// src/components/ListView.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from 'lodash';



const Highlighted = ({sentence = '', highlight = ''}) => {

   const text = sentence.toString();

   if (!highlight.trim()) {
     return <span>{text}</span>
   }
   const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
   const parts = text.split(regex)
   return (
     <span>
        {parts.filter(part => part).map((part, i) => (
            regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        ))}
    </span>
   )
}


class ListView extends Component {



  renderList() {
    return this.props.items.map((item,index) => {
      return (
        <div   key={item.doc_id} >
          <h4>{item.book_info.book_title} by {item.book_info.book_author}, {item.book_info.book_year} </h4>
          {item.sentences.map((sentence,index)=>{
              return (
              
              <div  key = {item.doc_id.toString() + index.toString()} className="well well-sm">                      
                
               <Highlighted key={index} sentence={sentence} highlight={this.props.search} />


              </div>

                    
              )
          })}
        </div>
    );
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
    items: state.sentencesReducer.items,
    search: state.sentencesReducer.search
  };
};



export default connect(mapStateToProps, null)(ListView);
