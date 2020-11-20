import React from 'react';
import PreviewListEntryContainer from '../../../../containers/productContainers/previewListEntryContainer.js';

const PreviewList = ({position}) => {
  // loop through start until end
  // create array of index from start to finish
  // pass in index.
  // last is either 'last' state or 7
  // action will change BOTH
  const photoIndex = [];
  for (let i = position.first; i <= position.last; i++ ) {
    photoIndex.push(i);
  }
return (
    <div className="flex-preview-list">
      <button className="up-button" type="submit"> Up </button>
      <ul className="preview_list">
        {photoIndex.map((index) => (
          <PreviewListEntryContainer index={index} />
        ))}
      </ul>
      <button className="down-button" type="submit"> Down </button>
    </div>
  );
};

export default PreviewList;
