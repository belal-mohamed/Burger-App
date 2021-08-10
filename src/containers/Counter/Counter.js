import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.increment} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={this.props.addFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.subFive}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result </button>
                {this.props.result.map( res => {
                    return <li onClick={this.props.onStoreResult}> {res} </li>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        result: state.result.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INC' , value: 1}),
        decrement: () => dispatch({type: 'DEC', value: 1}),
        addFive: () => dispatch({type: 'ADD_FIVE' , value: 5}),
        subFive: () => dispatch({type: 'SUB_FIVE' , value: 5}),
        onStoreResult: (ctr) => dispatch({type: 'STORE_RESULT' , counter: ctr})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);