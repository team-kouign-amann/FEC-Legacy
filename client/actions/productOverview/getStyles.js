import axios from 'axios';
import currentStyleAction from './currentStyle.js';
import allStylesAction from './allStyles.js';
import { previewListLastAction } from './previewList.js';

const getStyles = (productID) => {
  return (dispatch) => {
    return axios
      .get('http://localhost:8080/products/' + productID + '/styles')
      .then(({ data }) => {
        dispatch(allStylesAction(data.styles));
        dispatch(previewListLastAction(data.styles[0].photos.length - 1));
        dispatch(currentStyleAction(data.styles[0]));
      })
      .catch((err) => {
        console.log('Error fetching style! Error: ', err);
      });
  };
};

export default getStyles;
