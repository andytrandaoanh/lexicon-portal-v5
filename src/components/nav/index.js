import React from 'react';
import { NavLink } from 'react-router-dom';




function TopNavigation() {
  return(

  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
        <a className="navbar-brand">Lexicon</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/book">Books</NavLink></li>
          <li><NavLink to="/excerpt">Excerpts</NavLink></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


export default TopNavigation;