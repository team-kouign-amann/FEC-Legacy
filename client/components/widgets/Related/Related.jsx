import React from "react";
import RelatedCard from './Cards/RelatedCard.jsx';
import OutfitCard from './Cards/OutfitCard.jsx';

const Related = ({relatedInfo}) => {
  return (
    <div>
        <RelatedCard relatedInfo={relatedInfo}  />
        <OutfitCard />
    </div>
  )
}

export default Related;