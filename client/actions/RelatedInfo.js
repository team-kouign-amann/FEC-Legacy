import axios from 'axios';

export function getRelatedProducts() {
  // console.log('getproducts function is running')
  return (dispatch) => {
    dispatch(fetchRelatedProducts())
    axios.get('http://3.21.164.220/products/')
    .then((response) => {
      dispatch(fetchRelatedProductsSuccess(response.data));
    })
    .catch((error) => {
      console.log('Error with GET products: ', error)
      dispatch(fetchRelatedProductsFailure())});
  }
}

const fetchRelatedProducts = () => {
  return {type: 'FETCH_RELATED'}
}

const fetchRelatedProductsSuccess = (relatedProds) => {
  return {type: 'FETCH_RELATED_SUCCESS', payload: relatedProds}
}

const fetchRelatedProductsFailure = () => {
  return {type: 'FETCH_RELATED_FAILURE'}
}