import React from "react";
import Carousel from "./productComponents/Carousel.jsx";
import StyleSelector from "./productComponents/styleSelector.jsx";

const Product = ({product, currentStyle,styles}) => (
  <div>
    <div><h1>Product</h1></div>
    <div className="container">
      <div className="grid-container">
        <Carousel currentStyle={currentStyle}/>
        <div className="item2">
          <span className="category-name-font">{product.category}</span>
          <span className="product-name-font">{product.name}</span>
          <span className="price-font">{product.default_price}</span>
        </div>
        <StyleSelector styles={styles} />
        <div className="item4">Bag</div>
        <div className="item5">Size</div>
        <div className="item6">Slogan</div>
        <div className="item7">Guarantee</div>
      </div>
    </div>
  </div>
);

export default Product;
