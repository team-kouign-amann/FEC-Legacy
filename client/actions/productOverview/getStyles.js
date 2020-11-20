import axios from 'axios';
import currentStyleAction from './currentStyle.js';
import allStylesAction from './allStyles.js';
import {previewListFirstAction, previewListLastAction} from './previewList.js';


const getStyles = (productID) => {
  return (dispatch) => {
    return axios.get('http://3.21.164.220/products/' + productID + '/styles')
    .then(({data}) => {
      //console.log(data.results);
      //console.log(data.results[0]);
      dispatch(allStylesAction(data.results));
      dispatch(currentStyleAction(data.results[0]));
      dispatch(previewListLastAction(data.results[0]['photos'].length - 1));
    })
    .catch((err) => {
      console.log("Error fetching style! Error: ", err);
    })
  }
}

export default getStyles;