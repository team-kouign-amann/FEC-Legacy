import React from 'react';

const AverageStars = ({ percentage }) => (

  <div className="star-ratings-css">
    <div className="star-ratings-css-top" style={percentage}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <div className="star-ratings-css-bottom">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>

    </div>
  </div>
);

export default AverageStars;
