import React from "react";

const StartsBar = ({starsNumber,percentage}) => (
  <div>
      <h5><u>{`${starsNumber}`} stars</u></h5>
      <span className="ratings-container">
      <span className="rating-bar">
          <span className="rating-bar-filler" style={{ width: `${percentage}%`}}>
          <span className="black"> </span>
          </span>
      </span>
      </span>
  </div>
);

export default RatingBar;