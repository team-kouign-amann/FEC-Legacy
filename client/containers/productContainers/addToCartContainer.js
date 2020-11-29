import { connect } from 'react-redux';
import AddToCart from '../../components/widgets/Product/productComponents/AddToCart.jsx';
import postToCart from '../../actions/productOverview/postToCart.js';
import { toggleSelectSizeAction } from '../../actions/productOverview/selectSize.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  currentSize: state.selectSize.currentSize,
});

const mapDispatchToProps = (dispatch) => ({
  handlePost: (sku_id) => { postToCart(sku_id); },
  toggleSizeSelect: () => { alert('Select a size!'); dispatch(toggleSelectSizeAction(null)); },
});

const AddToCartContainer = connect(mapStateToProps, mapDispatchToProps)(AddToCart);

export default AddToCartContainer;
