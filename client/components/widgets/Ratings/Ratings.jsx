import React from 'react';
import StartsBar from './startsBar.jsx';
import AvarageStars from './avarageStars.jsx';
import SizeComfort from './sizeComfort.jsx';
import Reviews from './reviews.jsx';

const Rating = ({ reviews, rating, changeReviewsOrder }) => {
  // the data should come from meta
  const characteristics = {
    Size: {
      id: 14,
      value: '4.5000',
    },
    Comfort: {
      id: 16,
      value: '3.0000',
    },
  };
  const recommended = { 0: 14, 1: 24, null: 1 };// the data should come from meta
  const sum = recommended[0] + recommended[1] + recommended.null;
  const recommendPercentage = parseInt((recommended[1] / sum) * 100);
  const showReviews = [
    {
      review_id: 5,
      rating: 3,
      summary: "I'm enjoying wearing these shades",
      recommend: 0,
      response: '',
      body: 'Comfortable and practical.',
      date: '2019-04-14T00:00:00.000Z',
      reviewer_name: 'shortandsweeet',
      helpfulness: 5,
      photos: [{
        id: 1,
        url: 'urlplaceholder/review_5_photo_number_1.jpg',
      },
      {
        id: 2,
        url: 'urlplaceholder/review_5_photo_number_2.jpg',
      },

      ],
    },
    {
      review_id: 3,
      rating: 4,
      summary: 'I am liking these glasses',
      recommend: 0,
      response: "Glad you're enjoying the product!",
      body: "They are very dark. But that's good because I'm in very sunny spots",
      date: '2019-06-23T00:00:00.000Z',
      reviewer_name: 'bigbrotherbenjamin',
      helpfulness: 5,
      photos: [],
    },
  ];
  const ratingsMeta = {
    1: 1, 2: 2, 3: 22, 4: 7, 5: 7,
  }; // data should come from meta

  return (
    <div className="row">
      <div className="column_one">
        <h3>RATING &amp; REVIEWS</h3>
        <div className="rating"> 3.4 </div>
        <div className="star-ratings-css">
          <AvarageStars percentage={{ width: '57%' }} />
        </div>

        <div>
          <h5>
            {recommendPercentage}
            % of reviews recommend this product
          </h5>
        </div>

        <div className="starts-Bars">
          <StartsBar ratingsMeta={ratingsMeta} />
        </div>

        <div className="size-comfort">
          <SizeComfort characteristics={characteristics} />
        </div>

      </div>

      <div className="column_two">
        <div>
          <Reviews showReviews={showReviews} />
        </div>

        <div>
          <button type="button" className="more-reviews">MORE REVIEWS</button>
          <button type="button" className="add-a-review">ADD A REVIEW</button>
        </div>
      </div>

    </div>

  );
};

export default Rating;
