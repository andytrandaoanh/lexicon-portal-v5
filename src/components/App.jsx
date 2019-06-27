import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import '../style.css';
import TopNavigation from './TopNavigation.jsx';
import MainWindow from './MainWindow.jsx';
import BookWindow from './BookWindow.jsx';
import SentenceWindow from './SentenceWindow.jsx';


function App () {
	return (
		<div className = "App">
			<BrowserRouter>
	    		<TopNavigation />
	    		<Switch>	    		
		    		<Route path="/" exact component={MainWindow} />
		    		<Route path="/book" component={BookWindow} />
		    		<Route path="/sentence" component={SentenceWindow} />
			    </Switch>
			    
		    </BrowserRouter>            
        
    	</div>
	)
}



export default App;
