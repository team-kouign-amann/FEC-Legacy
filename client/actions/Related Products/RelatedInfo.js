/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { Promise } from 'bluebird';
import 'core-js';
import 'regenerator-runtime';

const fetchRelatedProducts = () => ({ type: 'FETCH_RELATED' });
const fetchRelatedProductsSuccess = (relatedProds) => ({ type: 'FETCH_RELATED_SUCCESS', payload: relatedProds });
const fetchRelatedProductsFailure = () => ({ type: 'FETCH_RELATED_FAILURE' });

export function getRelatedProducts(id) {
  return async (dispatch) => {
    dispatch(fetchRelatedProducts());
    try {
        const relatedProductsResponse = await axios.get(`http://3.21.164.220/products/${id}/related`);
        // Filter related products to be unique ids
        const relatedProductsResponseData = [...new Set(relatedProductsResponse.data)];
        // console.log(relatedProductsResponseData)
        const productPromises = await relatedProductsResponseData.map(async prodID => {
        const detail = await axios.get(`http://3.21.164.220/products/${prodID}`)
        const styles = await axios.get(`http://3.21.164.220/products/${prodID}/styles`)
        const ratings = await axios.get(`http://3.21.164.220/reviews/meta?product_id=${prodID}`)
        
        let productDetail = detail.data;
        productDetail.image = styles.data.results; 
        productDetail.ratings = ratings.data.ratings;
        return productDetail;
      });
      const relatedProducts = await Promise.all(productPromises);
      dispatch(fetchRelatedProductsSuccess(relatedProducts));
    } catch(err) {
       console.log('Error with Styles API', err);
       dispatch(fetchRelatedProductsFailure());
    }
  };
}