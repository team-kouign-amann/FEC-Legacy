import colorHexObj from './colorHexObj.js';

const colorFinder = (color) => {
  if (colorHexObj[color.toLowerCase()] !== undefined) {
    return true;
  }

  return false;
};

export default colorFinder;
