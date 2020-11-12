import { combineReducers } from 'redux';
//import your other reducers:
import testReducer from './testReducer';
import testReducer2 from './testReducer2';

var rootReducer = combineReducers({
 testReducer,
 testReducer2
});

export default rootReducer;