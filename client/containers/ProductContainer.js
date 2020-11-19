import { connect } from 'react-redux';
import Product from '../components/widgets/Product/Product.jsx';

var mapStateToProps = (state) => ({
  product: state.currentProduct,
  currentStyle: state.currentStyle,
  styles: state.styles,
});

var ProductContainer = connect(mapStateToProps, null)(Product);

export default ProductContainer;
