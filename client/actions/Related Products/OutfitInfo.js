import axios from 'axios';
import { Promise } from 'bluebird';

const fetchOutfitDetails = () => ({type: 'FETCH_OUTFIT_DETAILS'})
const fetchOutfitDetailsSuccess = (outfitInfo) => ({type: 'FETCH_OUTFIT_DETAILS_SUCCESS', payload: outfitInfo})
const fetchOutfitDetailsFailure = () => ({type: 'FETCH_OUTFIT_DETAILS_FAILURE'})


function getOutfitInformation(id) {
  return async (dispatch) => {
    dispatch(fetchOutfitDetails());
    try {
      // fetch data from product at id
      // then fetch img and price data from id
      const outfitInformationResponse = await axios.get(`http://3.21.164.220/products/${id}`);
      let outfitDetail = outfitInformationResponse.data;
      dispatch(fetchOutfitDetailsSuccess(outfitDetail))
    } catch(error) {
      console.log('Outfit Error: ', error);
      dispatch(fetchOutfitDetailsFailure());
    }
  }
}