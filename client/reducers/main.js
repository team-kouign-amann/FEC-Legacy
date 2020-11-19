import { combineReducers } from 'redux';
//import your other reducers:
import questionsReducer from './questionsReducer';
import currentReviewsReducer from './ratingReducers/ratingReducer.js';
import relatedInfoReducer from './relatedProdReducer.js';
import currentProductReducer from './productOverview/currentProductReducer.js';
import currentStyleReducer from './productOverview/currentStyleReducer.js';
import allStylesReducer from './productOverview/allStylesReducer.js';
import carouselPositionReducer from './productOverview/carouselPositionReducer.js';

var rootReducer = combineReducers({
  relatedInfo: relatedInfoReducer,
  currentProduct: currentProductReducer,
  currentStyle: currentStyleReducer,
  styles: allStylesReducer,
  carouselPosition: carouselPositionReducer,
  showReviews: currentReviewsReducer,
  currentQuestions: questionsReducer,
});

export default rootReducer;
