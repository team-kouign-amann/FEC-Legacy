import React from 'react';
import Review from './review.jsx';
import getReview from '../../../actions/RatingsOverview/getReviews.js';
import store from '../../../store/store.js';

const Reviews = ({ showReviews }) => {
  if (showReviews[0] === undefined) {
    return (
      <div>
        <br />
        <br />
        <div>
          <h4>
            0 reviews, sorted by relevance
          </h4>
        </div>

        <div />

      </div>
    );
  }
  return (
    <div>
      <br />
      <br />
      <div>
        <form>
          <label>
            {`${showReviews.length} `}
            reviews, sorted by
            {' '}
          </label>
          <select
            onChange={(e) => {
              // console.log('click');
              // console.log(e.target.value);
              store.dispatch(getReview(3, e.target.value, 100));
            }}
          >
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </form>
        <h4>

          reviews, sorted by relevance
        </h4>
      </div>

      <div>
        {
            showReviews.map((review) => (
              <Review review={review} />))
            }
      </div>

    </div>

  );
};

export default Reviews;
