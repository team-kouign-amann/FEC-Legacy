import React from "react";
import Carousel from "./productComponents/Carousel.jsx";
import StyleSelector from "./productComponents/styleSelector.jsx";
import StyleSelectorContainer from '../../../containers/productContainers/styleSelectorContainer.js';
import CarouselContainer from '../../../containers/productContainers/carouselContainer.js';

const Product = ({product, currentStyle, styles}) => (
  <div className="container">
      <div className="grid-container">
        <CarouselContainer />
        <div className="item2">
          <span className="category-name-font">{product.category}</span>
          <span className="product-name-font">{product.name}</span>
          <span className="price-font">{product.default_price}</span>
        </div>
        <StyleSelectorContainer />
        <div className="item4">Bag</div>
        <div className="item5">Size</div>
        <div className="item6">Slogan</div>
        <div className="item7">Guarantee</div>
      </div>
  </div>
);

export default Product;
