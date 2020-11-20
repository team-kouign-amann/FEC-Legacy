/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { Promise } from 'bluebird';

const fetchRelatedProducts = () => ({ type: 'FETCH_RELATED' });
const fetchRelatedProductsSuccess = (relatedProds) => ({ type: 'FETCH_RELATED_SUCCESS', payload: relatedProds });
const fetchRelatedProductsFailure = () => ({ type: 'FETCH_RELATED_FAILURE' });
const updateRelatedProductWithImage = (productDetail) => ({ type: 'UPDATE_RELATED_PRODUCT_WITH_IMAGE', payload: productDetail });

export function getRelatedProducts(id) {
  return async (dispatch) => {
    dispatch(fetchRelatedProducts());
    try {
        const relatedProductsResponse = await axios.get(`http://3.21.164.220/products/${id}/related`);

        const productPromises = await relatedProductsResponse.data.map(async prodID => {
        const detail = await axios.get(`http://3.21.164.220/products/${prodID}`)
        const styles = await axios.get(`http://3.21.164.220/products/${prodID}/styles`)
        const ratings = await axios.get(`http://3.21.164.220/reviews/meta?product_id=${prodID}`)
        let productDetail = detail.data;
        productDetail.image = styles.data.results; 
        productDetail.ratings = ratings.data.ratings;
        return productDetail;
      });
      // console.log(await Promise.all(productPromises));
      const relatedProducts = await Promise.all(productPromises);
      dispatch(fetchRelatedProductsSuccess(relatedProducts));
    } catch(err) {
       console.log('Error with Styles API', err);
       dispatch(fetchRelatedProductsFailure());
    }
      


      // .then(async (response) => {
      //   const products = response.data;
      //   for (let i = 0; i < products.length; i++) {
      //     axios.get(`http://3.21.164.220/products/${products[i]}`)
      //       .then((results) => productData.push(results.data))
      //       .then(() => { dispatch(fetchRelatedProductsSuccess(productData)); })
      //       .then(() => {
      //         axios.get(`http://3.21.164.220/products/${i}/styles`)
      //           .then((styleResult) => dispatch(updateRelatedProductWithImage(styleResult.data)));
      //       })
      //       .catch((error) => {
      //         console.log('Error transforming ids to products: ', error);
      //       });
      //   }
      // })
      // .catch((error) => {
      //   console.log('Error with GET products: ', error);
      //   dispatch(fetchRelatedProductsFailure());
      // });
  };
}