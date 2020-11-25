import React from 'react';

const SelectSize = ({currentStyle, selectSize, handleSelectClick, updateMaxQuantity,
  handleSelectChange, selectQuantity, handleQuantityClick, handleQuantityChange}) => {
  const sizeArray = [];
  const sizeObj = {};
  for (const sku in currentStyle.skus) {
    sizeArray.push(currentStyle.skus[sku]);
    sizeObj[currentStyle.skus[sku].size] = currentStyle.skus[sku].quantity;
  }
  let selectItemClass = '';
  if (selectSize.display === false) {
    selectItemClass = 'select-items-hidden';
  }
  let selectQuantityClass = '';
  if (selectQuantity.display === false) {
    selectQuantityClass = 'select-items-hidden';
  }

  const sizes = [...Array(selectSize.maxQuantity + 1).keys()];

  return (
    <div className="item4">
      <div className="select-size-container">
        <div className="select-items">
          <div onClick={()=>{handleSelectClick()}}>
            {selectSize.currentSize}
          </div>
          {Object.keys(sizeObj).map((size) => (
            <div className={selectItemClass} onClick={() => {handleSelectChange(size); handleSelectClick();
              updateMaxQuantity(sizeObj[size])}}>
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="select-quantity-container">
        <div className="select-quantity-items">
          <div onClick={()=>{handleQuantityClick()}}>
            {selectQuantity.currentQuantity}
          </div>
          {sizes.map((quantity) => (
            <div className={selectQuantityClass} onClick={() => { handleQuantityClick(); handleQuantityChange(quantity);}}>
              {quantity}
            </div>
          ))}
        </div>
      </div>
      <div className="select-size-container" style={{'flex-basis': '100%'}}>
        <div className='select-items'>Add to cart</div>
      </div>
    </div>
  );
};

export default SelectSize;
