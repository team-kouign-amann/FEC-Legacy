import React from "react";

const Reviews = ({product_id}) => (
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
);

export default Reviews;