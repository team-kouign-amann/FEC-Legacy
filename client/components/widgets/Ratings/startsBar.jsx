import React from 'react';

const StartsBar = ({ starsNumber, percentage }) => (
  <div>
    <h5>
      <u>
        {`${starsNumber} `}
        stars
      </u>
    </h5>
    <div className="ratings-container">
      <div className="rating-bar">
        <div className="rating-bar-fill" style={percentage}>
          <span className="black"> </span>
        </div>
      </div>
    </div>
  </div>
);

export default StartsBar;
