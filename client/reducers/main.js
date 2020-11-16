import { combineReducers } from 'redux';
//import your other reducers:
import testReducer from './testReducer';
import testReducer2 from './testReducer2';
import relatedInfoReducer from './relatedProdReducer.js';

var rootReducer = combineReducers({
  test1: testReducer,
  test2: testReducer2,
  relatedInfo: relatedInfoReducer
});

export default rootReducer;
