import axios from 'axios';
import store from '../../store/store.js';
import getReview from './getReviews.js';

const postReview = (newReview) => {
  const requestReview = {
    product_id: newReview.product_id,
    rating: parseInt(newReview.rating, 10),
    summary: newReview.summary,
    body: newReview.body,
    recommend: newReview.recommend,
    name: newReview.name,
    email: newReview.email,
    photos: newReview.photos,
    characteristics: newReview.characteristics,
  };
  console.log(requestReview);
  axios.post('http://3.21.164.220/reviews', requestReview)
    .then((resp) => {
      //console.log(resp);

      // dispatch
      store.dispatch(getReview(3));
    });
};

// const addReviewAction = (newReview) => ({
//   type: 'ADD_REVIEWS',
//   Review: newReview,
// });

export default postReview;
