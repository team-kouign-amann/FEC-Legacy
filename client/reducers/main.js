import { combineReducers } from 'redux';

import metaReducer from './ratingReducers/metaReducer.js';
import reviewsReducer from './ratingReducers/reviewsReducer.js';

// import your other reducers:
import relatedInfoReducer from './Related Products/relatedProdReducer.js';
import currentProductReducer from './productOverview/currentProductReducer.js';
import currentStyleReducer from './productOverview/currentStyleReducer.js';
import allStylesReducer from './productOverview/allStylesReducer.js';
import carouselPositionReducer from './productOverview/carouselPositionReducer.js';

const rootReducer = combineReducers({
  relatedInfo: relatedInfoReducer,
  currentProduct: currentProductReducer,
  currentStyle: currentStyleReducer,
  styles: allStylesReducer,
  carouselPosition: carouselPositionReducer,
  showReviews: reviewsReducer,
  metaRatings: metaReducer,
});

export default rootReducer;
