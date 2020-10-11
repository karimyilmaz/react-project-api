import React from 'react';
import './Counter.css'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'


class Counter extends React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //         counter: 0
    //     }
    // }

    // increment = () => {
    //     this.setState((prevState) => {
    //         return {counter: prevState.counter + 1}
    //     })
    // }

    // decrement = () => {
    //     this.setState((prevState) => {
    //         return {counter: prevState.counter - 1 }
    //     })
    // }

    render(){
        return (
            <div className="counter">
                <h1>{this.props.counter}</h1>
                <Button variant="primary" onClick={this.props.increment}>Increment</Button>
                <Button variant="primary" onClick={this.props.decrement}>Decrement</Button>
                
            </div>
            
        )
    }


}



const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
} 


const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)