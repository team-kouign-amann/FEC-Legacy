import React from 'react';
import Review from './review.jsx';

const Reviews = ({ showReviews }) => (
  <div>
    <br />
    <br />
    <div>
      <h4>
        {`${showReviews.length} `}
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

export default Reviews;
