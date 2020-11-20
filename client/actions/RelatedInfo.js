/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const fetchRelatedProducts = () => ({ type: 'FETCH_RELATED' });

const fetchRelatedProductsSuccess = (relatedProds) => ({ type: 'FETCH_RELATED_SUCCESS', payload: relatedProds });
const fetchRelatedProductsFailure = () => ({ type: 'FETCH_RELATED_FAILURE' });

export function getRelatedProducts(id) {
  return (dispatch) => {
    const productData = [];
    dispatch(fetchRelatedProducts());
    axios.get(`http://3.21.164.220/products/${id}/related`)
      .then((response) => {
        const products = response.data;
        for (let i = 0; i < products.length; i++) {
          axios.get(`http://3.21.164.220/products/${products[i]}`)
            .then((results) => productData.push(results.data))
            .then(() => { dispatch(fetchRelatedProductsSuccess(productData)); })
            .catch((error) => {
              console.log('Error transforming ids to products: ', error);
            });
        }
      })
      .catch((error) => {
        console.log('Error with GET products: ', error);
        dispatch(fetchRelatedProductsFailure());
      });
  };
}