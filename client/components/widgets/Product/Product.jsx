import React from "react";

const Product = ({product, currentStyle,styles}) => (
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
          <img className="center-image" src={currentStyle.photos[0].url} alt="" />
          <button className="right-button" type="submit"> Right </button>
        </div>
        <div className="item2">
          <span className="category-name-font">{product.category} {currentStyle.photos[0].url}</span>
          <span className="product-name-font">{product.name}</span>
          <span className="price-font">{product.default_price}</span>

        </div>
        <div className="item3">
          <span className="selected-font"><b>Style ></b> Selected Style... </span>
          <ul className="remove-bullet">
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
          </ul>
          <ul className="remove-bullet">
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
            <li className="horizontal-list"><img style={{"border-radius": "25px"}} src="http://placecorgi.com/50" /></li>
          </ul>
        </div>
        <div className="item4">Bag</div>
        <div className="item5">Size</div>
        <div className="item6">Slogan</div>
        <div className="item7">Guarantee</div>
      </div>
    </div>
  </div>
);

export default Product;
