import { connect } from 'react-redux';
import Related from '../components/widgets/Related/Related.jsx';
import { relatedInfo, getRelatedProducts } from '../actions/Related Products/RelatedInfo.js';
import { outfitInfo, getOutfitInformation } from '../actions/Related Products/OutfitInfo.js';
import clickTrackerWrapper from '../../util/clickTrackerWrapper.jsx';

var mapStateToProps = (state) => ({
  relatedInfo: state.relatedInfo.relatedProducts,
  loading: state.relatedInfo.loading
});

var mapDispatchToProps = dispatch => {
  return {
    getRelatedProducts: () => dispatch(getRelatedProducts())
  }
}

var RelatedContainer = connect(mapStateToProps, mapDispatchToProps)(clickTrackerWrapper(Related, 'Related'));

export default RelatedContainer;