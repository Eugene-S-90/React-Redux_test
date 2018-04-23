import {combineReducers} from 'redux';

import counter from './reducer_counter';

const rootReducer = combineReducers({
    counter,
})
export default rootReducer;