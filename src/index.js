import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Counter from './Components/Counter/Counter'
import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
       <div className="nav-buttons-div">
          <Link to="/">
            <Button variant="light">page1</Button>
          </Link> 
          
          
          <Link to="/page2">
            <Button variant="light">page2</Button>
          </Link>
           
          
        </div>
          <Provider store={store}>
            <Route exact path="/page2" component={Counter}>
            </Route>
          </Provider>
          
          <Route exact path="/" component={App}></Route>
        
    
     
      </React.Fragment>
    </BrowserRouter>
  
    
      
    
  ,
  document.getElementById('root')
);
