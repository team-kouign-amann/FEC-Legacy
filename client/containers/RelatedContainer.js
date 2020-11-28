import { connect } from 'react-redux';
import Related from '../components/widgets/Related/Related.jsx';
import {
  relatedInfo,
  getRelatedProducts,
} from '../actions/Related Products/RelatedInfo.js';
import {
  outfitInfo,
  getOutfitInformation,
} from '../actions/Related Products/OutfitInfo.js';
import clickTrackerWrapper from '../../util/clickTrackerWrapper.jsx';

let mapStateToProps = (state) => ({
  product: state.currentProduct,
  relatedInfo: state.relatedInfo.relatedProducts,
  loading: state.relatedInfo.loading,
  outfitInfo: state.outfitInfo.outfitInfo,
  overviewProduct: state.currentProduct,
});

let mapDispatchToProps = (dispatch) => {
  return {
    getRelatedProducts: () => dispatch(getRelatedProducts(1)),
    getOutfitInformation: () => dispatch(getOutfitInformation(1)),
  };
};

var RelatedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(clickTrackerWrapper(Related, 'Related'));

export default RelatedContainer;
