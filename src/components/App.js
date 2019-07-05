import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../style.css';
import TopNavigation from './nav';
import MainWindow from './main';
import BookWindow from './book';
import ExcerptWindow from './excerpt';
import QuoteWindow from './quote';

function App () {
	return (
		<div className = "App">
			<BrowserRouter>
	    		<TopNavigation />
	    		<Switch>	    		
		    		<Route path='/' exact component={MainWindow} />
		    		<Route path='/book' component={BookWindow} />
		    		<Route path='/excerpt' component={ExcerptWindow} />
		    		<Route path='/quotes/:bookid/:indexnum' component={QuoteWindow} />
			    </Switch>
			    
		    </BrowserRouter>            
        
    	</div>
	)
}



export default App;
