import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import '../style.css';
import TopNavigation from './shared/';
import MainWindow from './main/';
import BookWindow from './book/index.js';
import ExcerptWindow from './excerpt/';


function App () {
	return (
		<div className = "App">
			<BrowserRouter>
	    		<TopNavigation />
	    		<Switch>	    		
		    		<Route path="/" exact component={MainWindow} />
		    		<Route path="/book" component={BookWindow} />
		    		<Route path="/excerpt" component={ExcerptWindow} />
			    </Switch>
			    
		    </BrowserRouter>            
        
    	</div>
	)
}



export default App;
