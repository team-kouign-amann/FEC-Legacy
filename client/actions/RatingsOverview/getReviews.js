import axios from 'axios';
import currentReviewsAction from './currentReviews.js';

const getReview = (productId, sortedSelect = 'relevant', count = 5) => {
  console.log(sortedSelect);
  return (dispatch) => axios.get(`http://3.21.164.220/reviews/?product_id=${productId}&sort=${sortedSelect}&count=${count}`)
    .then((resp) => {
    // console.log('getReview');
    // console.log(resp.data);
      dispatch(currentReviewsAction(resp.data.results));
    })
    .catch((err) => {
      console.log('Error! Please fetch right reviews data. Error: ', err);
    });
};
// need invoke the function in where produce the productID.
export default getReview;
