import React from 'react';

const StartsBar = ({ ratingsMeta }) => {
  let sum = 0;
  console.log(ratingsMeta);
  Object.values(ratingsMeta).map((value) => { sum += value; });
  return Object.keys(ratingsMeta).map((key) => {
    const temp = Math.floor((ratingsMeta[key] * 100) / sum);
    const percentage = `${temp}%`;
    return (
      <div>
        <h5>
          <u>
            {`${key} `}
            stars
          </u>
        </h5>
        <div className="ratings-container">
          <div className="rating-bar">
            <div className="rating-bar-fill" style={{ width: percentage }} />
          </div>
        </div>
      </div>
    );
  });
};

export default StartsBar;
