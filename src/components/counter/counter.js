import React from 'react';
import { connect } from 'react-redux'

import CounterOutput from './counter_output'
import CounterControl from './counter_control'

const Counter = () => {
    return (
        <div>
            <CounterOutput />
            <CounterControl label="INCREMENT"/>
            <CounterControl label="DECREMENT"/>
        </div>
    );
};


export default connect() (Counter);