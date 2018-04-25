import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { increment } from '../../actions/actions_counter'
import { decrement } from '../../actions/actions_counter'

const Control = ({label,increment,decrement}) => {
    let actionObj = {
        "INCREMENT":increment,
        "DECREMENT":decrement
    }
    return (
        <div>
            <button onClick={actionObj[label]}>{label}</button>
        </div>
    );
};

const  mapDispatchToProps = (dispatch) => bindActionCreators({
    increment,
    decrement,
},dispatch)


export default connect (null,mapDispatchToProps) (Control);