import React from 'react';
import StyleEntry from './styleEntry.jsx';
import StyleEntryContainer from '../../../../containers/productContainers/styleEntryContainer.js';

const StyleSelector = ({currentStyle, styles}) => {
  // turn styles into matrix (columns of four)
  var convert = (array) => {
    var matrix = [];
    var items = 0;
    var rows = Math.round(array.length / 4);
    for (var i = 0; i < rows; i++) {
      // for each row, place up to 4 value
      var col = 0;
      matrix[i] = [];
      while (col < 4 && items < array.length) {
        matrix[i][col] = array[items];
        col++;
        items++;
      }
      col = 0;
    }

    return matrix;
  }
  console.log("Styles array: ", styles);
  var styleMatrix = convert(styles);
  console.log("Style matrix: ", styleMatrix);

  return (
    <div className="item3">
      <span className="selected-font"><b>Style > </b> {currentStyle.name} </span>
      {styleMatrix.map((row) => (
        <div className="style-row-container">
          {row.map((style) => (
            <StyleEntryContainer style={style} />
            ))}
        </div>
    ))}

    </div>
    )
  };

export default StyleSelector;
