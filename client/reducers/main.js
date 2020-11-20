import { combineReducers } from 'redux';

import currentReviewsReducer from './ratingReducers/ratingReducer.js';

// import your other reducers:
import relatedInfoReducer from './relatedProdReducer.js';
import currentProductReducer from './productOverview/currentProductReducer.js';
import currentStyleReducer from './productOverview/currentStyleReducer.js';
import allStylesReducer from './productOverview/allStylesReducer.js';
import carouselPositionReducer from './productOverview/carouselPositionReducer.js';
import previewListReducer from './productOverview/previewListReducer.js';

const rootReducer = combineReducers({
  relatedInfo: relatedInfoReducer,
  currentProduct: currentProductReducer,
  currentStyle: currentStyleReducer,
  styles: allStylesReducer,
  carouselPosition: carouselPositionReducer,
  previewListPosition: previewListReducer,
  showReviews: currentReviewsReducer,
});

export default rootReducer;
