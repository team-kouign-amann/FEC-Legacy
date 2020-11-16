import React from 'react';

const Rating = (props) => (
  <div>
    <div className="row">
      <div className="column_one">
        <div>
          <div>
            <h3>RATING &amp; REVIEWS</h3>

            <div>
              <h1>
                <span className="rating"> 3.5 </span>
                <span className="stars">
                  <span className="full-star">★</span>
                  <span className="full-star">★</span>
                  <span className="star half">☆</span>
                  <span className="star">☆</span>
                  <span className="star">☆</span>
                </span>
              </h1>
            </div>

          </div>

          {/* <div>
            <h5>100% of reviews recommend this product</h5> */}

            {/* <div>
              <h5><u>5 stars</u></h5>
              <div className="ratings-container-five">
                <div className="rating-bar">
                  <div className="rate-8">
                    <span className="black"> </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5><u>4 stars</u></h5>
              <div className="ratings-container-four">
                <div className="rating-bar">
                  <div className="rate-3">
                    <span className="black"> </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5><u>3 stars</u></h5>
              <div className="ratings-container-three">
                <div className="rating-bar">
                  <div className="rate-4">
                    <span className="black"> </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5><u>2 stars</u></h5>
              <div className="ratings-container-two">
                <div className="rating-bar">
                  <div className="rate-7">
                    <span className="black"> </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5><u>1 stars</u></h5>
              <div className="ratings-container-one">
                <div className="rating-bar">
                  <div className="rate-2">
                    <span className="black"> </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div>
              <div className="bars-container">
                <h5>Size</h5>
                <ul className="bv-content-slider-bar">
                  <li className="rating-stats-50" />
                  <li className="rating-stats-50" />
                </ul>
                <span className="bv-content-slider-halfway" />
                <div className="bv-content-slider-value-container">
                  <span className="bv-content-slider-value" />
                </div>
              </div>
            </div>
            <div>
              <div className="bars-container">
                <h5>Comfort</h5>
                <ul className="bv-content-slider-bar">
                  <li className="rating-stats-50" />
                  <li className="rating-stats-50" />
                </ul>
                <span className="bv-content-slider-halfway" />
                <div className="bv-content-slider-value-container">
                  <span className="bv-content-slider-value" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="column_two">
        <div>
          <br />
          <br />
          <div>
            <h4>248 reviews, sorted by relevance</h4>
          </div>

          <div>
            <span className="rating-stars"> ★★★★★ </span>
            <h4>Review title with word-break truncation to </h4>
            <h6>User1234, January1, 2019</h6>
            <p>...line,if necessary</p>
          </div>

          <div>
            <h6>Helpful?</h6>
            <button type="button">Yes</button>
            <h6>(10)  |  </h6>
            <a href="/about/report.htm">Report</a>
          </div>

        </div>

        <div>
          <button type="button" className="more-reviews">MORE REVIEWS</button>
          <button type="button" className="add-a-review">ADD A REVIEW</button>
        </div>

      </div>
    </div>

  </div>

);

export default Rating;