import { connect } from 'react-redux';
import Product from '../components/widgets/Product/Product.jsx';
import { expandedViewAction } from '../actions/productOverview/expandedView.js';
import clickTrackerWrapper from '../../util/clickTrackerWrapper.jsx';

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  currentStyle: state.currentStyle,
  styles: state.styles,
  carouselPosition: state.carouselPosition,
  expandedView: state.expandedView.toggleExpanded,
});

const mapDispatchToProps = (dispatch) => ({
  handleImageClick: () => { dispatch(expandedViewAction()); },
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(clickTrackerWrapper(Product, 'Product'));

export default ProductContainer;
