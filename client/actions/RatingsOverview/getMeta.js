import axios from 'axios';
import MetaDataAction from './metaData.js';

const getMeta = (productId) => (dispatch) => axios.get(`http://3.21.164.220/reviews/meta?product_id=${productId}`)
  .then((resp) => {
    // console.log('getMeta');
    // console.log(resp.data);
    // dispatch(MetaDataAction(resp.data.ratings));
    dispatch(MetaDataAction(resp.data)); 
  })
  .catch((err) => {
    console.log('Error! Please fetch right ratings data. Error: ', err);
  });

export default getMeta;
