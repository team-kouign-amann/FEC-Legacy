import axios from 'axios';
import store from '../../store/store.js';
import getReview from './getReviews.js';

const reviewHelpful = (review_id) => {
  axios.put('http://3.21.164.220/reviews/:review_id/helpful', review_id)
    .then((resp) => {
    // dispatch
      store.dispatch(getReview(3));
    });
};

export default reviewHelpful;
