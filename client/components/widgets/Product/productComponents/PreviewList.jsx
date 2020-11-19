import React from 'react';

const PreviewList = ({currentStyle}) => (
  <div className="flex-preview-list">
    <button className="up-button" type="submit"> Up </button>
    <ul className="preview_list">
      {currentStyle.photos.map((photo) => (
        <li><img src={photo.thumbnail_url} className="thumbnail-img" alt="" /></li>
      ))}
    </ul>
    <button className="down-button" type="submit"> Down </button>
  </div>
);

export default PreviewList;
