import React from 'react';
import StartsBar from './startsBar.jsx';
import AvarageStars from './avarageStars.jsx';

const Rating = ({ reviews, rating, changeReviewsOrder }) => (

  <div className="row">
    <div className="column_one">
      <h3>RATING &amp; REVIEWS</h3>
      <div className="rating"> 3.4 </div>
      <div className="star-ratings-css">
        <AvarageStars percentage={{ width: '57%' }} />
      </div>

      <div className="starts-Bars">
        {[1, 2, 3, 4, 5].map((number) => (
          <StartsBar starsNumber={number} percentage={{ width: '57%' }} />
        ))}
      </div>

      {/* {
        <div className = "starts-Bars">
          {[1,2,3,4,5].map(number => {
            <StartsBar starsNumber={number} percentage = {(data)=>{
              let max = 0;
              let rating = data.ratings;
              rating.forEach(num => {if(max < rating[num]) {max = rating[num];}});
              percentage = rating[number]/max;
              return percentage;
            }} />
          })}
        </div>} */}

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
