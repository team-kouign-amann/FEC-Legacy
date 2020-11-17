import currentProductAction from './currentProduct';
import axios from 'axios';
const getProduct = (productID) => {
  return (dispatch) => {
    return axios.get('http://3.21.164.220/products/' + productID)
    .then(({data}) => {
      dispatch(currentProductAction(data));
    })
    .catch((err) => {
      console.log("Error! In get product call. Error: ", err);
    })
  }
}

export default getProduct;