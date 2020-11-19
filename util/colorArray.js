import colorFinder from './colorFinder.js';

const colorArray = (styleName) => {
  // split stylename? by ampersand
  const colorsArray = [];
  const styleNameArray = styleName.split(' & ');
  const firstStyle = styleNameArray[0].split(' ');
  const secondStyle =
    styleNameArray.length > 1 ? styleNameArray[1].split(' ') : undefined;

  if (colorFinder((firstStyle[0] + firstStyle[1]).toLowerCase())) {
    colorsArray.push((firstStyle[0] + firstStyle[1]).toLowerCase());
  } else if (colorFinder(firstStyle[0].toLowerCase())) {
    colorsArray.push(firstStyle[0].toLowerCase());
  } else if (
    firstStyle[1] !== undefined &&
    colorFinder(firstStyle[1].toLowerCase())
  ) {
    colorsArray.push(firstStyle[1].toLowerCase());
  }

  if (secondStyle !== undefined) {
    if (colorFinder((secondStyle[0] + secondStyle[1]).toLowerCase())) {
      colorsArray.push((secondStyle[0] + secondStyle[1]).toLowerCase());
    } else if (colorFinder(secondStyle[0].toLowerCase())) {
      colorsArray.push(secondStyle[0].toLowerCase());
    } else if (
      secondStyle[1] !== undefined &&
      colorFinder(secondStyle[1].toLowerCase())
    ) {
      colorsArray.push(secondStyle[1].toLowerCase());
    }
  }

  return colorsArray;
};

export default colorArray;
