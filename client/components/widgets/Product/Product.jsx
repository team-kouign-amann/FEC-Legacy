import React from "react";
import Carousel from "./productComponents/Carousel.jsx";
import StyleSelector from "./productComponents/styleSelector.jsx";
import StyleSelectorContainer from '../../../containers/productContainers/styleSelectorContainer.js';
import CarouselContainer from '../../../containers/productContainers/carouselContainer.js';
import SelectSizeContainer from '../../../containers/productContainers/selectSize.js';
import ProductInfoContainer from '../../../containers/productContainers/productInfoContainer.js';

const Product = ({product, currentStyle, styles}) => (
  <div style={{"margin":"0px 150px"}}>
    <div className="header-container">
      <div className="header-logo">
        Daifuku X Donqueello Collab Official Store
      </div>
      <div className="header-search-container">
        <input className="header-search-bar" placeholder="____________" />
      </div>
    </div>
    <div className="container">
      <div className="grid-container">
        <CarouselContainer />
        <ProductInfoContainer />
        <StyleSelectorContainer />
        <SelectSizeContainer />
        <div className="item5">Size</div>
        <div className="item6">Slogan</div>
        <div className="item7">Guarantee</div>
      </div>
    </div>
  </div>
);

export default Product;
