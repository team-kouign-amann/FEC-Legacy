import { combineReducers } from 'redux';
//import your other reducers:
import testReducer from './testReducer1';
import testReducer2 from './testReducer2';
import questionsReducer from './questionsReducer';

import currentReviewsReducer from './ratingReducers/ratingReducer.js';

// import your other reducers:
import relatedInfoReducer from './relatedProdReducer.js';
import currentProductReducer from './productOverview/currentProductReducer.js';
import currentStyleReducer from './productOverview/currentStyleReducer.js';
import allStylesReducer from './productOverview/allStylesReducer.js';
import carouselPositionReducer from './productOverview/carouselPositionReducer.js';

const rootReducer = combineReducers({
  relatedInfo: relatedInfoReducer,
  currentProduct: currentProductReducer,
  currentStyle: currentStyleReducer,
  styles: allStylesReducer,
  currentQuestions: questionsReducer,
  carouselPosition: carouselPositionReducer,
  showReviews: currentReviewsReducer,
});

export default rootReducer;
