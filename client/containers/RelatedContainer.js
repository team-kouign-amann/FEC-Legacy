import { connect } from 'react-redux';
import Related from '../components/widgets/Related/Related.jsx';
import { relatedInfo, getProducts } from '../actions/RelatedInfo.js';

var mapStateToProps = (state) => ({
  relatedInfo: state.relatedInfo.relatedProducts,
  loading: state.relatedInfo.loading
});

var mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}



var RelatedContainer = connect(mapStateToProps, mapDispatchToProps)(Related);

export default RelatedContainer;