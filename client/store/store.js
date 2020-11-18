import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import getReview from '../actions/RatingsOverview/getReviews.js';

export default createStore(
  rootReducer,
  {reviews:getReview(productId)},
  applyMiddleware(thunk),
);
