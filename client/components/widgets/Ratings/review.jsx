import React from 'react';
//import moment from 'moment';
import AvarageStars from './avarageStars.jsx';
import Image from './image.jsx';

const Review = ({ review }) => {
  const starPercentage = `${review.rating / 4 * 100}%`;
  const postTime = review.date.split('T')[0];
  //const postTime = moment().format(review.date);

  // const handleHelpClick = function () { };
  // const handleReportClick = function () { };

  return (
    <div>
      <div className="star-ratings-css">
        <AvarageStars percentage={{ width: starPercentage }} />
      </div>
      <div>
        <h4>{review.summary}</h4>
        <h6 className="user-data">
          {review.reviewer_name}
          {' '}
          {postTime}
        </h6>
        <p>{review.body}</p>
      </div>
      <Image photos={review.photos}></Image>

      <div>
        <h6>
          Helpful?
          <a ><u>Yes</u></a>
          (
          {review.helpfulness}
          ) |
          <a ><u> Report</u></a>
        </h6>
      </div>
    </div>
  );
};

export default Review;
