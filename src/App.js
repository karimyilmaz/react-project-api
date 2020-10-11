import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherCard from './Components/WeatherCard/WeatherCard'
import axios from 'axios'
import {BrowserRouter, Link, Route} from 'react-router-dom'


const apiKey = "05123f653ce0e1e3502296016106f396"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      information: [] ,
      userInput: "" 
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event){
    this.setState({userInput: event.target.value})
  }
  

  dataHandler(data){
      let {main: {temp, temp_min, temp_max}, name, sys:{country}, weather: [{description, icon}]} = data
      this.setState({information: [<WeatherCard name={name} country={country} icon={icon} 
          temp={Math.floor(temp-273.15)} tempMin={Math.floor(temp_min-273.15)} tempMax={Math.floor(temp_max-273.15)}
      />]})
      this.setState({userInput: ""})
      
    }

  onSubmitHandler(event){
      event.preventDefault()
      
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&appid=${apiKey}`)
        .then(response => this.dataHandler(response.data))
        .catch(function (error) {
          console.log("hello");
        })

    }
  
  


  render(){
      return (
              <React.Fragment>
                

              {/* {FORM} */}
              <Container>
                <Form className="my-4" onSubmit={this.onSubmitHandler}>
                  <Row>
                    <Col xs={4}>
                      <Form.Group>
                         <Form.Control name="city" type="text" placeholder="Enter city" onChange={this.onChangeHandler}
                          value={this.state.userInput}>
                         </Form.Control>
                      </Form.Group>
                    </Col> 
                    
                    <Col> 
                      <Button variant="primary" type="submit">
                        Find Weather
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Container>
              
              
              {this.state.information}

              </React.Fragment>
              


      )}

}
export default App;
