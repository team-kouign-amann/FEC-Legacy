import { combineReducers } from 'redux';
//import your other reducers:
import testReducer from './testReducer1';
import testReducer2 from './testReducer2';
import questionsReducer from './questionsReducer';

var rootReducer = combineReducers({
  testReducer,
  testReducer2,
  questionsReducer,
});

export default rootReducer;
