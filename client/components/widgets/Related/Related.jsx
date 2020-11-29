/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';

const Related = (props) => {
  const { productId } = useParams();
  useEffect(() => {
    props.getRelatedProducts(productId);
    props.getOutfitInformation(productId);
  }, []);

  return (
    <div>
      <ProductCarousel
        relatedInfo={props.relatedInfo}
        overviewProduct={props.overviewProduct}
      />
      <OutfitCarousel outfitInfo={props.outfitInfo} />
    </div>
  );
};

export default Related;
