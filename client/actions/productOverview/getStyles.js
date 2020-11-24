import axios from 'axios';
import currentStyleAction from './currentStyle.js';
import allStylesAction from './allStyles.js';



const getStyles = (productID) => {
  return (dispatch) => {
    return axios.get('http://3.21.164.220/products/' + productID + '/styles')
    .then(({data}) => {
      // console.log(data.results);
      // console.log(data.results[0]);
      dispatch(allStylesAction(data.results));
      dispatch(currentStyleAction(data.results[0]));
    })
    .catch((err) => {
      console.log("Error fetching style! Error: ", err);
    })
  }
}

export default getStyles;