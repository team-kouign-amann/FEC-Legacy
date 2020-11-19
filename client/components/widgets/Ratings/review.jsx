import React from 'react';
import AvarageStars from './avarageStars.jsx';

const Review = ({review}) => {
  const starPercentage = review.rating/6 * 100 + '%';
  return (
    <div>
        <div className="star-ratings-css">
          <AvarageStars percentage={{ width: starPercentage }} />
        </div>
        <div>
          <h4>Review title with word-break truncation to </h4>
          <h6>User1234, January1, 2019</h6>
          <p>...line,if necessary</p>
        </div>

      <div>
        <h6>Helpful?</h6>
        <button type="button">Yes</button>
        <h6>(10)  |  </h6>
        <a href="/about/report.htm">Report</a>
      </div>
    </div>
  );
};

export default Review;

