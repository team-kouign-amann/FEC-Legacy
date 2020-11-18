import React from 'react';
import '../../../styles/style.css';

const Rating = ({ product_id, handleAddReviewClick }) => (

  <div className="row">
    <div className="column_one">
      <h3>RATING &amp; REVIEWS</h3>
      <span className="rating"> 3.4 </span>

      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={{ width:`${percentage}%`}}>
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

        <div className = "starts-Bars">
          {[1,2,3,4,5].map(number => {
            <StartsBar starsNumber={number} percentage = {percentage} />
          })}  
        </div>
    </div>

    <div className="column_two">
      <div>
        <button type="button" className="more-reviews">MORE REVIEWS</button>
        <button type="button" className="add-a-review">ADD A REVIEW</button>
      </div>
    </div>

  </div>
  

);

export default Rating;