import React from 'react';

const PreviewListEntry = ({currentStyle, index}) => (
  <li><img src={currentStyle.photos[index].thumbnail_url} className="thumbnail-img" alt="" /></li>
);

export default PreviewListEntry;
