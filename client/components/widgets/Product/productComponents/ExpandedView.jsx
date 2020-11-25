import React from 'react';

const ExpandedView = ({currentStyle, carouselPosition, handleImageClick}) => (
  <React.Fragment key="key">
    <div class={"overlay"}></div>
    <div class={"overlayContent"}>
      <img src={currentStyle.photos[carouselPosition].url !== null ? currentStyle.photos[carouselPosition].url : ''} alt=''
      onClick={()=> {handleImageClick()}} />
    </div>
  </React.Fragment>
);

export default ExpandedView;
