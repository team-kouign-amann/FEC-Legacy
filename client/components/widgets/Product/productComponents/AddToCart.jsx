import React from 'react';

const AddToCart = ({currentStyle, currentSize, handlePost, toggleSizeSelect}) => {
  // Create object mapping size:sku id

  const skuObj = {};
  for (const sku in currentStyle.skus) {
    skuObj[currentStyle.skus[sku].size] = sku;
  }

  return (
    <div className="add-to-cart-container">
      <div className="add-to-cart-button">
        <div style={{ 'align-self': 'center' }} onClick={skuObj[currentSize] === undefined ? () => { toggleSizeSelect() } : () => { handlePost(Number(skuObj[currentSize])); } }> ADD TO CART</div>
        <div style={{ 'font-size': '1.5em'}}> + </div>
      </div>
    </div>
  );
};

export default AddToCart;
