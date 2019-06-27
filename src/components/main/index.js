
import React from 'react';
import SearchForm from './SearchForm';
import ListSearch from './ListSearch';
import ListView from './ListView';


class MainWindow extends React.Component {

  render() {


  return (
    
    <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <h2><small>Search Lexicon</small></h2>
            
              <SearchForm />
            <div>
              <ListSearch />
              
            </div>
    
          </div>
          
          <div className="col-sm-9">
             
              <ListView />
        </div>   
        </div>
    </div>
      

  )
}
}

export default MainWindow;