import React from "react";
import RelatedCard from './Cards/RelatedCard.jsx';
import OutfitCard from './Cards/OutfitCard.jsx';

const Related = ({ relatedInfo, getProducts}) => {
  return (
    <div>
        <RelatedCard relatedInfo={relatedInfo} getProducts={getProducts} />
        <OutfitCard />
    </div>
  )
}

export default Related;