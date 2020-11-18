import React from 'react';
import StyleEntry from './styleEntry.jsx';

const StyleSelector = ({styles}) => (
  <div className="item3">
    <span className="selected-font"><b>Style ></b> Selected Style... </span>
    <ul className="remove-bullet">
      {styles.map((style) => (
        <StyleEntry style={style} />
      ))}
    </ul>
  </div>
)

export default StyleSelector;