import React from 'react';
import { connect } from 'react-redux'

const CounterOutput = ({result}) => {
    return (
        <div>
            {result}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        result:state.counter,
    };  
};

export default connect(mapStateToProps) (CounterOutput);