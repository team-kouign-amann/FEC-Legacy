import React from "react";
import RelatedCard from './Cards/RelatedCard.jsx';
import OutfitCard from './Cards/OutfitCard.jsx';

const Related = ({ relatedInfo, getRelatedProducts }) => {
  return (
    <div>
        <RelatedCard relatedInfo={relatedInfo} getRelatedProducts={getRelatedProducts} />
        <OutfitCard />
    </div>
  )
}

export default Related;