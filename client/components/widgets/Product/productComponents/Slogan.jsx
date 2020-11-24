import React from 'react';

const Slogan = ({product}) => (
  <div className="item6">
    <div className='product-slogan'>
      {product.slogan}
    </div>
    <div className='product-description'>
      {product.description}
    </div>
  </div>
);

export default Slogan;
