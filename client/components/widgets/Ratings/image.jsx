import React from 'react';

const Image = ({ photos }) => {
  //console.log(photos);
  return (
    photos.map((photo) => (
      <img className="images" src={photo.url} alt={photo.id} />
    ))
  );
};

export default Image;
