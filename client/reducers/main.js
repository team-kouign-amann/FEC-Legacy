import { combineReducers } from 'redux';
 
import currentReviewsReducer from './ratingsReducers/ratingtReducer.js';

const rootReducer = combineReducers({
 
//import your other reducers:
import testReducer from './testReducer';
import testReducer2 from './testReducer2';
import relatedInfoReducer from './relatedProdReducer.js';
import currentProductReducer from './productOverview/currentProductReducer.js'
import currentStyleReducer from './productOverview/currentStyleReducer.js';
import allStylesReducer from './productOverview/allStylesReducer.js';
var rootReducer = combineReducers({
  test1: testReducer,
  test2: testReducer2,
  relatedInfo: relatedInfoReducer,
  currentProduct: currentProductReducer,
  currentStyle: currentStyleReducer,
  styles: allStylesReducer,
  showReviews: currentReviewsReducer
});

export default rootReducer;
