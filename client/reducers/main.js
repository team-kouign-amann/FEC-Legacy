import { combineReducers } from 'redux';
// import your other reducers:
import testReducer from './testReducer.js';
import testReducer2 from './testReducer2.js';
import currentReviewsReducer from './ratingsReducers/ratingtReducer.js';

const rootReducer = combineReducers({
  test1: testReducer,
  test2: testReducer2,
  showReviews: currentReviewsReducer,
});

export default rootReducer;
