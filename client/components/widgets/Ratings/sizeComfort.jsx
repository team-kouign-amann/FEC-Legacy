import React from 'react';

const SizeComfort = ({ characteristics }) => Object.keys(characteristics).map((key) => {
  const temp = (parseInt(characteristics[key].value, 10) * 100) / 5;
  const percentage = `${temp}%`;
  return (
    <div className="bars-container">
      <h4>{key}</h4>
      <div className="size-comfort-container">
        <div className="size-comfort-bar" style={{ width: percentage }}>
          <span className="size-comfort-point">▼</span>
        </div>
      </div>
      <div className="perfect-rating-text">
        <span className="perfect-rating-poor">Poor</span>
        <span className="perfect-rating-perfect">Perfect</span>
      </div>
    </div>
  );
});

export default SizeComfort;
