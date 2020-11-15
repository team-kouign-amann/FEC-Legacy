import React from "react";

const Rating = (props) => (
 
  <div>
    <div>
      <div>
        <h3>RATING &amp; REVIEWS</h3>
        <!--
        <div>
          <h1>3.5</h1> 
          <span class="rating-stars"> ★★★★★ </span>
        </div>
        -->
      </div>

      <div>
        <h5>100% of reviews recommend this product</h5>
        <!--
        <div>
          <h5><u>5 stars</u></h5>
          <div class="ratings-bar" rating-value="5"> 
            <span class="ratings-container"> 
              <span class="ratings-value">
              </span> 
            </span> 
          </div>
        </div>
        <div>
          <h5><u>4 stars</u></h5>
          <div class="ratings-bar" rating-value="5"> 
            <span class="ratings-container"> 
              <span class="ratings-value">
              </span> 
            </span> 
          </div>
        </div>
        <div>
          <h5><u>3 stars</u></h5>
          <div class="ratings-bar" rating-value="5"> 
            <span class="ratings-container"> 
              <span class="ratings-value">
              </span> 
            </span> 
          </div>
        </div>
        <div>
          <h5><u>2 stars</u></h5>
          <div class="ratings-bar" rating-value="5"> 
            <span class="ratings-container"> 
              <span class="ratings-value">
              </span> 
            </span> 
          </div>
        </div>
        <div>
          <h5><u>1 stars</u></h5>
          <div class="ratings-bar" rating-value="5"> 
            <span class="ratings-container"> 
              <span class="ratings-value">
              </span> 
            </span> 
          </div>
        </div>
        -->
      </div>

      <div> 
      <!--
        <div> 
          <div class="bars-container"> 
            <h5>Size</h5>
            <ul class="bv-content-slider-bar">
              <li class="rating-stats-50"></li>
              <li class="rating-stats-50"></li>
            </ul>
            <span class="bv-content-slider-halfway"></span> 
            <div class="bv-content-slider-value-container">
              <span class="bv-content-slider-value">
              </span> 
            </div> 
          </div>        
        </div>
        <div> 
          <div class="bars-container"> 
          <h5>Comfort</h5>
            <ul class="bv-content-slider-bar">
              <li class="rating-stats-50" ></li>
              <li class="rating-stats-50"></li>
            </ul>
            <span class="bv-content-slider-halfway"></span> 
            <div class="bv-content-slider-value-container">
              <span class="bv-content-slider-value">
              </span> 
            </div> 
          </div>        
        </div>
        -->
        
      </div>
    </div>


    <div>
      <div>
        <h4>248 reviews, sorted by relevance</h4>
      </div>

      <div>
        <span class="rating-stars"> ★★★★★ </span>
        <h4>Review title with word-break truncation to </h4>
        <h6>User1234,January1,2019</h6>
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
      <button type="more-reviews">MORE REVIEWS</button>
      <button type="add-a-review">ADD A REVIEW</button>
    </div>

  </div>
);

export default Rating;