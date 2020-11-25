import { connect } from 'react-redux';
import ExpandedView from '../../components/widgets/Product/productComponents/ExpandedView.jsx';
import carouselPositionAction from '../../actions/productOverview/carouselPosition.js';
import expandedViewAction from '../../actions/productOverview/expandedView.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  carouselPosition: state.carouselPosition,
});

const mapDispatchToProps = (dispatch) => ({
  handleCarouselChange: (position) => { dispatch(carouselPositionAction(position)); },
  handleImageClick: () => { dispatch(expandedViewAction()); },
});

const ExpandedViewContainer = connect(mapStateToProps, mapDispatchToProps)(ExpandedView);

export default ExpandedViewContainer;
