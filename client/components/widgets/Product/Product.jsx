import React from "react";

const Product = () => (
  <div>
    <div><h1>Product</h1></div>
    <div className="container">
      <div className="grid-container">
        <div className="item1">
          <button className="up-button" type="submit"> up </button>
          <ul className="preview_list">
            <li><img src="http://placecorgi.com/100" /></li>
            <li><img src="http://placecorgi.com/100" /></li>
            <li><img src="http://placecorgi.com/100" /></li>
          </ul>
          <button className="down-button" type="submit"> down </button>
          <button className="left-button" type="submit"> Left </button>
          <img className="center-image" src="http://placecorgi.com/450" alt="" />
          <button className="right-button" type="submit"> Right </button>
        </div>
        <div className="item2">Category</div>
        <div className="item3">Style</div>
        <div className="item4">Bag</div>
        <div className="item5">Size</div>
        <div className="item6">Slogan</div>
        <div className="item7">Guarantee</div>
      </div>
    </div>
  </div>
);

export default Product;
