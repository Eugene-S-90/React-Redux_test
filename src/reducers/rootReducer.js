import {combineReducers} from 'redux';

import counter from './reducer_counter';
import chuckJokes from './reducer_chuckJokes';

const rootReducer = combineReducers({
    counter,
    chuckJokes
})
export default rootReducer;