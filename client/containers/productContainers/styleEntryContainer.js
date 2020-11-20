import { connect } from 'react-redux';
import StyleEntry from '../../components/widgets/Product/productComponents/styleEntry.jsx';
import currentStyleAction from '../../actions/productOverview/currentStyle.js';
import carouselPositionAction from '../../actions/productOverview/carouselPosition.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (style) => { dispatch(currentStyleAction(style));
    dispatch(carouselPositionAction(0)); },
});

const StyleEntryContainer = connect(mapStateToProps, mapDispatchToProps)(StyleEntry);

export default StyleEntryContainer;
