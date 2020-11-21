/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// import { Promise } from 'bluebird';

const fetchOutfitDetails = () => ({type: 'FETCH_OUTFIT_DETAILS'});

const fetchOutfitDetailsSuccess = (outfitInfo) => ({type: 'FETCH_OUTFIT_DETAILS_SUCCESS', payload: outfitInfo });

const fetchOutfitDetailsFailure = () => ({type: 'FETCH_OUTFIT_DETAILS_FAILURE'});

export function getOutfitInformation(id) {
  return async (dispatch) => {
    dispatch(fetchOutfitDetails());
    try {
      const detail = await axios.get(`http://3.21.164.220/products/${id}`);
      const styles = await axios.get(`http://3.21.164.220/products/${id}/styles`);
      const ratings = await axios.get(`http://3.21.164.220/reviews/meta?product_id=${id}`)
      let outfitInformation = detail.data;
      outfitInformation.styles = styles.data.results;
      outfitInformation.ratings = ratings.data.ratings;
      dispatch(fetchOutfitDetailsSuccess(outfitInformation))
    } catch(error) {
      console.log('Outfit Error: ', error);
      dispatch(fetchOutfitDetailsFailure());
    }
  }
}