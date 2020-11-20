import React from 'react';
import Review from './review.jsx';

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
};

export default Reviews;
