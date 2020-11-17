import axios from 'axios';

export function getProducts() {
  console.log('getproducts function is running')
  return (dispatch) => {
    dispatch(fetchRelatedProducts())
    console.log('Dispatch is being fired')
    axios.get('http://3.21.164.220/products/')
    .then((response) => {
      console.log('data is being used')
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