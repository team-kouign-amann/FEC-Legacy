import React from "react";
import StyleSelectorContainer from '../../../containers/productContainers/styleSelectorContainer.js';
import CarouselContainer from '../../../containers/productContainers/carouselContainer.js';
import SelectSizeContainer from '../../../containers/productContainers/selectSize.js';
import ProductInfoContainer from '../../../containers/productContainers/productInfoContainer.js';
import SloganContainer from '../../../containers/productContainers/sloganContainer.js';

const Product = ({currentStyle, carouselPosition, expandedView, handleImageClick}) => (
  <React.Fragment>
  <div class={expandedView ? "overlay" : "overlay hidden"}></div>
  <div class={expandedView ? "overlayContent" : "overlayContent hidden"}>
    <img src={currentStyle.photos[carouselPosition].url !== null ? currentStyle.photos[carouselPosition].url : ''} alt=''
    onClick={()=> {handleImageClick()}} />
  </div>
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
        <SloganContainer />
        <div className="item7">Guarantee</div>
      </div>
    </div>
  </div>
  </React.Fragment>
);

export default Product;
