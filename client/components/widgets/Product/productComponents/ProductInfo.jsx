import React from 'react';
import AverageStars from '../../Ratings/averageStars.jsx';

const ProductInfo = ({ currentStyle, product }) => {
  if (currentStyle.sale_price === '0') {
    return (
      <div className="item2">
        <AverageStars percentage={{ width: '10%'}} />
        <a href="/#ratings_reviews">Read all reviews</a>
        <span className="category-name-font">{product.category}</span>
        <span className="product-name-font">{product.name}</span>
        <span className="price-font">${currentStyle.original_price}</span>
      </div>
    );
  }

  return (
    <div className="item2">
      <AverageStars percentage={{ width: '10%' }} />
      <a href="/#ratings_reviews" style={{ margin: '10px 0px'}}>Read all reviews</a>
      <span className="category-name-font">{product.category}</span>
      <span className="product-name-font">{product.name}</span>
      <span className="price-font">
        <span style={{ color: 'red', 'padding-right': '10px'}}>${currentStyle.sale_price}</span>
        <span style={{ 'text-decoration': 'line-through' }}>${currentStyle.original_price}</span>
      </span>
    </div>
  );
};

export default ProductInfo;
