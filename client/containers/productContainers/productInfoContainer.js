import { connect } from 'react-redux';
import ProductInfo from '../../components/widgets/Product/productComponents/ProductInfo.jsx';

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  currentStyle: state.currentStyle,
});

const ProductInfoContainer = connect(mapStateToProps, null)(ProductInfo);

export default ProductInfoContainer;
