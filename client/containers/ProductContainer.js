import { connect } from 'react-redux';
import Product from '../components/widgets/Product/Product.jsx';
import expandedViewAction from '../actions/productOverview/expandedView.js';

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  currentStyle: state.currentStyle,
  styles: state.styles,
  carouselPosition: state.carouselPosition,
  expandedView: state.expandedView,
});

const mapDispatchToProps = (dispatch) => ({
  handleImageClick: () => { dispatch(expandedViewAction()); },
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
