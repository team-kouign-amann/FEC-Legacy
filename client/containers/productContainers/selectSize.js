import { connect } from 'react-redux';
import SelectSize from '../../components/widgets/Product/productComponents/SelectSize.jsx';
import toggleSelectSizeAction from '../../actions/productOverview/selectSize.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  selectSize: state.selectSize,
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectClick: () => { dispatch(toggleSelectSizeAction(null)); },
});

const SelectSizeContainer = connect(mapStateToProps, mapDispatchToProps)(SelectSize);

export default SelectSizeContainer;
