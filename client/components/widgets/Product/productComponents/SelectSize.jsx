import React from 'react';
import AddToCartContainer from '../../../../containers/productContainers/addToCartContainer.js';

const SelectSize = ({
  currentStyle,
  selectSize,
  handleSelectClick,
  updateMaxQuantity,
  handleSelectChange,
  selectQuantity,
  handleQuantityClick,
  handleQuantityChange,
}) => {
  const sizeArray = currentStyle.skus;
  const sizeObj = {};

  for (const sku in sizeArray) {
    sizeObj[currentStyle.skus[sku].size] = currentStyle.skus[sku].quantity;
  }

  Object.entries(sizeObj).map((el) => {
    console.log(el[0]);
    console.log(el[1]);
  });

  let selectItemClass = '';
  if (selectSize.display === false) {
    selectItemClass = 'select-items-hidden';
  }
  let selectQuantityClass = '';
  if (selectQuantity.display === false) {
    selectQuantityClass = 'select-items-hidden';
  }

  const sizes = [...Array(selectSize.maxQuantity + 1).keys()];
  sizes.shift();
  return (
    <div className='item4'>
      <div className='select-size-container'>
        <div className='select-items'>
          <div
            onClick={() => {
              handleSelectClick();
            }}>
            {selectSize.currentSize}
          </div>
          {Object.keys(sizeObj).map((size) => (
            <div
              className={selectItemClass}
              onClick={() => {
                handleSelectChange(size);
                handleSelectClick();
                updateMaxQuantity(sizeObj[size]);
              }}>
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className='select-quantity-container'>
        <div className='select-quantity-items'>
          <div
            onClick={
              selectSize.currentSize === 'SELECT SIZE'
                ? (e) => {
                    e.preventDefault();
                  }
                : () => {
                    handleQuantityClick();
                  }
            }>
            {selectQuantity.currentQuantity}
          </div>
          {sizes.map((quantity) => (
            <div
              className={selectQuantityClass}
              onClick={() => {
                handleQuantityClick();
                handleQuantityChange(quantity);
              }}>
              {quantity}
            </div>
          ))}
        </div>
      </div>
      <AddToCartContainer />
    </div>
  );
};

export default SelectSize;
