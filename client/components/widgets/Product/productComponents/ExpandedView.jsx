import React from 'react';

const ExpandedView = ({currentStyle, carouselPosition, handleImageClick, handleCarouselChange, toggleZoom, exitExpandedView}) => {
  let leftButtonClass = 'arrow-carousel left-carousel';
  let rightButtonClass = 'arrow-carousel right-carousel';
  if (carouselPosition === 0) {
    leftButtonClass += ' hidden';
  }
  if (carouselPosition === currentStyle.photos.length - 1) {
    rightButtonClass += ' hidden';
  }
  const style = {"transform": "scale(2.5)"};
  return (
    <React.Fragment key="key">
      <div class={"overlay"} onClick={() => {exitExpandedView()}} ></div>
      <div class={"overlayContent"}>
        <div onClick={()=> {handleImageClick(toggleStyle)}}></div>
        <div className={leftButtonClass} style={{width: '25px', height: '25px'}}
        onClick={() => { handleCarouselChange(carouselPosition - 1); }}
            onMouseDown={(e) => {e.preventDefault()}}></div>
        <img src={currentStyle.photos[carouselPosition].url !== null ? currentStyle.photos[carouselPosition].url : ''} alt='' style={toggleZoom ? style : {}} onClick={()=> {handleImageClick()}} />
        <div className={rightButtonClass} style={{width: '25px', height: '25px'}} onClick={() => { handleCarouselChange(carouselPosition + 1); }}
      onMouseDown={(e) => {e.preventDefault()}}></div>
        <div ></div>
      </div>
    </React.Fragment>
  );
};

export default ExpandedView;
