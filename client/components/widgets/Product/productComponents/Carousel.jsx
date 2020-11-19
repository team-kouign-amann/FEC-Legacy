import React from 'react';
import PreviewListContainer from '../../../../containers/productContainers/previewListContainer.js';

const defaultImg = '../../../../../image-not-available.jpg';

const Carousel = ({currentStyle, carouselPosition, handleCarouselChange}) => {
  let leftButtonClass = 'button';
  let rightButtonClass = 'button';
  if (carouselPosition === 0) {
    leftButtonClass += ' hidden';
  }
  if (carouselPosition === currentStyle.photos.length - 1) {
    rightButtonClass += ' hidden';
  }
  return (
    <div className="item1">
      <PreviewListContainer />
      <button className={leftButtonClass} type="submit" onClick={() => { handleCarouselChange(carouselPosition - 1); }}> Left </button>
      <img className="center-image" src={currentStyle.photos[carouselPosition].url !== null ? currentStyle.photos[carouselPosition].url : defaultImg } alt="" />
      <button className={rightButtonClass} type="submit" onClick={() => { handleCarouselChange(carouselPosition + 1); }}> Right </button>
    </div>
  );
};

export default Carousel;
