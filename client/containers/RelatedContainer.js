import { connect } from 'react-redux';
import Related from '../components/widgets/Related/Related.jsx';
import { relatedInfo, getRelatedProducts } from '../actions/Related Products/RelatedInfo.js';

var mapStateToProps = (state) => ({
  relatedInfo: state.relatedInfo.relatedProducts,
  loading: state.relatedInfo.loading
});

var mapDispatchToProps = dispatch => {
  return {
    getRelatedProducts: (id) => dispatch(getRelatedProducts(id))
  }
}



var RelatedContainer = connect(mapStateToProps, mapDispatchToProps)(Related);

export default RelatedContainer;