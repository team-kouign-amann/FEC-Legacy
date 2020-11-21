import React from 'react';

const SelectSize = ({currentStyle, selectSize, handleSelectClick}) => {
  const sizeArray = [];
  for (const sku in currentStyle.skus) {
    sizeArray.push(currentStyle.skus[sku]);
  }
  let selectItemClass = '';
  if (selectSize === true) {
    selectItemClass = 'select-items-hidden';
  }
  return (
    <div className="item4">
      <div className="select-size-container">
        <div className="select-items">
          <div onClick={()=>{handleSelectClick()}}>
            SELECT SIZE
          </div>
          {sizeArray.map((size) => (
            <div className={selectItemClass}>
              {size.size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectSize;
