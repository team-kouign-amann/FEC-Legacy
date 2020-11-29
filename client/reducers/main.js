import { combineReducers } from 'redux';
//import your other reducers:
import questionsReducer from './questionsReducer.js';
// import currentReviewsReducer from './ratingReducers/ratingReducer.js';

import metaReducer from './ratingReducers/metaReducer.js';
import reviewsReducer from './ratingReducers/reviewsReducer.js';

// import your other reducers:
import relatedInfoReducer from './Related Products/relatedProdReducer.js';
import outfitInfoReducer from './Related Products/outfitCardReducer.js';
import currentProductReducer from './productOverview/currentProductReducer.js';
import currentStyleReducer from './productOverview/currentStyleReducer.js';
import allStylesReducer from './productOverview/allStylesReducer.js';
import carouselPositionReducer from './productOverview/carouselPositionReducer.js';
import previewListReducer from './productOverview/previewListReducer.js';
import selectSizeReducer from './productOverview/selectSize.js';
import selectQuantityReducer from './productOverview/selectQuantity.js';
import expandedViewReducer from './productOverview/expandedViewReducer.js';

const rootReducer = combineReducers({
  relatedInfo: relatedInfoReducer,
  outfitInfo: outfitInfoReducer,
  currentProduct: currentProductReducer,
  currentStyle: currentStyleReducer,
  styles: allStylesReducer,
  carouselPosition: carouselPositionReducer,
  currentQuestions: questionsReducer,
  previewListPosition: previewListReducer,
  selectSize: selectSizeReducer,
  selectQuantity: selectQuantityReducer,
  expandedView: expandedViewReducer,
  showReviews: reviewsReducer,
  metaRatings: metaReducer,
});

export default rootReducer;
