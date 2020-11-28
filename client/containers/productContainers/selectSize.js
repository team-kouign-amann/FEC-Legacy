import { connect } from 'react-redux';
import SelectSize from '../../components/widgets/Product/productComponents/SelectSize.jsx';
import { toggleSelectSizeAction, selectSizeAction, updateMaxQuantityAction } from '../../actions/productOverview/selectSize.js';
import { toggleSelectQuantityAction, selectQuantityAction } from '../../actions/productOverview/selectQuantity.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  selectSize: state.selectSize,
  selectQuantity: state.selectQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectClick: () => { dispatch(toggleSelectSizeAction(null)); },
  handleSelectChange: (size) => { dispatch(selectSizeAction(size));
    dispatch(selectQuantityAction(1)); },
  updateMaxQuantity: (quantity) => { dispatch(updateMaxQuantityAction(quantity)); },
  handleQuantityClick: () => { dispatch(toggleSelectQuantityAction(null)); },
  handleQuantityChange: (quantity) => { dispatch(selectQuantityAction(quantity)); },
});

const SelectSizeContainer = connect(mapStateToProps, mapDispatchToProps)(SelectSize);

export default SelectSizeContainer;
