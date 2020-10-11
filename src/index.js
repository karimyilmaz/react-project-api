import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Counter from './Components/Counter/Counter'

ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
       <div className="nav-buttons-div">
          <Link to="/page2">
            <Button variant="light">page2</Button>
          </Link>
          <Link to="/">
            <Button variant="light">page1</Button>
          </Link>  
          
        </div>
          <Route exact path="/page2" component={Counter}></Route>
          <Route exact path="/" component={App}></Route>
        
    
     
      </React.Fragment>
    </BrowserRouter>
  
    
      
    
  ,
  document.getElementById('root')
);
