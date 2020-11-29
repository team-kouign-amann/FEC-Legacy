import { connect } from 'react-redux';
import Product from '../components/widgets/Product/Product.jsx';
import { expandedViewAction } from '../actions/productOverview/expandedView.js';
import clickTrackerWrapper from '../../util/clickTrackerWrapper.jsx';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  carouselPosition: state.carouselPosition,
  expandedView: state.expandedView.toggleExpanded,
  styles: state.styles,
});

const mapDispatchToProps = (dispatch) => ({
  handleImageClick: () => { dispatch(expandedViewAction()); },
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(clickTrackerWrapper(Product, 'Product'));

export default ProductContainer;
