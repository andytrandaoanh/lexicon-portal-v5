import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBooks} from "../../actions/books";
import { loadDefaultQuotes} from "../../actions/quotes";
import { bindActionCreators } from "redux";


class BookList extends React.Component {

	constructor(props) {
	    super(props);
	}

  	componentDidMount() {
  		this.props.loadBooks()
  	}


  	render() {

  		const { error, loading, items, loadDefaultQuotes } = this.props;

  		  return (
    
			<div className="btn-group-vertical">
				{
					items.map((item, index) => {

						return <button
							type="button" 
							className="btn btn-default" 
							key={index}
							onClick={() => loadDefaultQuotes(item.book_id)} >
							{item.book_title}
							</button>

					}

					)

				}
			</div>

		 )

	}
}



const mapStateToProps = state => ({
    items: state.bookReducer.items,
    loading: state.bookReducer.loading,
    error: state.bookReducer.error
});



const mapDispatchToProps = dispatch => {
  return bindActionCreators(
  	{ loadDefaultQuotes,
  	  loadBooks
  	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

