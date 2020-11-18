import React from 'react';
import '../../../styles/style.css';

const Rating = ({ product_id, handleAddReviewClick }) => (

  <div className="row">
    <div className="column_one">
      <h3>RATING &amp; REVIEWS</h3>
      <span className="rating"> 3.4 </span>

      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={{ width: '86%' }}>
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

      <div>
        <h5>100% of reviews recommend this product</h5>
        <h5><u>5 stars</u></h5>
        <div className="ratings-container-five">
          <div className="rating-bar">
            <div className="rate-8">
              <span className="black"> </span>
            </div>
          </div>
        </div>
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