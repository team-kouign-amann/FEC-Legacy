import React from 'react';

const SelectSize = ({currentStyle, selectSize, handleSelectClick, updateMaxQuantity,
  handleSelectChange}) => {
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
      {selectSize.maxQuantity}
    </div>
  );
};

export default SelectSize;
