import React from 'react';

const Carousel = ({currentStyle}) => (
  <div className="item1">
    <div className="flex-preview-list">
      <button className="up-button" type="submit"> Up </button>
      <ul className="preview_list">
        <li><img src='http://placecorgi.com/100' /></li>
        <li><img src='http://placecorgi.com/100' /></li>
        <li><img src='http://placecorgi.com/100' /></li>
      </ul>
      <button className="down-button" type="submit"> Down </button>
    </div>
    <button className="left-button" type="submit"> Left </button>
    <img className="center-image" src={currentStyle.photos[0].url} alt="" />
    <button className="right-button" type="submit"> Right </button>
  </div>
);

export default Carousel;
