import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { getChuckJokes } from '../../actions/actions_chuckJokes'
import GetChuckJokesView from '../chuckJokes/chuckJokesView'


const ChuckJokes = ({getChuckJokes,result}) => {
    return (
        <div>
            <button onClick={()=>getChuckJokes(result)}>Chuck</button>
            <GetChuckJokesView/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        result:state.counter,
    };  
};

const  mapDispatchToProps = (dispatch) => bindActionCreators({
    getChuckJokes,

},dispatch)



export default connect (mapStateToProps,mapDispatchToProps) (ChuckJokes);