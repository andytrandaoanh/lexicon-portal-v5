// src/components/ListSearch.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { selectWord } from "../actions/index";
import { bindActionCreators } from "redux";

class ListSearch extends Component {


  renderList() {
    return this.props.items.map((item,index) => {
      return (
        <button
          key={index}
          onClick={() => this.props.selectWord(item.word_form)}
        >
          {item.word_form}

        </button>
    );
  })};

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    items: state.wordsReducer.items
  };
};

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectWord: selectWord }, dispatch);
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ListSearch);
