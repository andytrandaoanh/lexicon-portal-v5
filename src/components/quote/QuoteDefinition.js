import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class QuoteDefinition extends React.Component {

	constructor(props) {
	    super(props);
	}


  	render() {

  		return (

         <div>
            {this.props.items.map((item, index)=>(

              <div key={item.defid + 'ctn'}>

                <span className ='def_headword' key={item.defid + 'hw'}>{item.word}</span>
                <span className ="def_phonetic" key={item.defid + 'ph'}> {item.phonetic} </span>
                <span className ="def_category" key={item.defid + 'cat'}>{item.category}</span>
                <p className="def_content" key={item.defid + 'def'}>{item.definition} </p>


              </div>
              
            ))

          }
        </div>
                         	
  		)

	}
}

const mapStateToProps = state => ({
    items: state.definitionReducer.items
   

});

export default connect(mapStateToProps, null)(QuoteDefinition);

