import React from 'react';
import colorArray from '../../../../../util/colorArray.js';

const StyleEntry = ({style, handleClick, currentStyle}) => {
  const colors = colorArray(style.name);
  // set class name here
  // if style === currentStyle.id, then update class name
  // update with class written to determine highlight
  let className = 'style-select-img horizontal-list';
  if (style.style_id === currentStyle.style_id) {
    className += ' selected-style style-select-img-select-border';
  }
  if (colors.length === 0) {
    return (
      <li className={className} style={{'background':'grey'}} >
        <button type="submit" onClick={() => { handleClick(style) }} />
      </li>
    )
  } else if (colors.length === 1) {
    return (
      <li className={className} style = {{'background': `${colors[0]}`}} onClick={() => {handleClick(style)}}>

      </li>
    )
  } else if (colors.length === 2) {
    return (
      <li className={className} style={{'background':`linear-gradient(-45deg, ${colors[0]}, ${colors[0]} 49%, white 49%, white 51%, ${colors[1]} 51%`}} onClick={() => { handleClick(style) }} >
      </li>
    )
  } else {
    return (
      <li className={className} style={{'background':'grey'}}>

      </li>
    )
  }

};

export default StyleEntry;
