import { connect } from 'react-redux';
import SelectSize from '../../components/widgets/Product/productComponents/SelectSize.jsx';
import { toggleSelectSizeAction, selectSizeAction, updateMaxQuantityAction } from '../../actions/productOverview/selectSize.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  selectSize: state.selectSize,
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectClick: () => { dispatch(toggleSelectSizeAction(null)); },
  handleSelectChange: (size) => { dispatch(selectSizeAction(size)); },
  updateMaxQuantity: (quantity) => {dispatch(updateMaxQuantityAction(quantity)); },
});

const SelectSizeContainer = connect(mapStateToProps, mapDispatchToProps)(SelectSize);

export default SelectSizeContainer;
