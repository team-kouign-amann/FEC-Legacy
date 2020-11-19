import React from 'react';
import PreviewListEntry from './PreviewListEntry.jsx';

const PreviewList = ({currentStyle}) => {
return (
    <div className="flex-preview-list">
      <button className="up-button" type="submit"> Up </button>
      <ul className="preview_list">
        {currentStyle.photos.map((item, index) => (
          <PreviewListEntry  currentStyle={currentStyle} index={index}/>
        ))}
      </ul>
      <button className="down-button" type="submit"> Down </button>
    </div>
  );
};

export default PreviewList;
