import { connect } from 'react-redux';
import ExpandedView from '../../components/widgets/Product/productComponents/ExpandedView.jsx';
import carouselPositionAction from '../../actions/productOverview/carouselPosition.js';
import { expandedViewAction, zoomViewAction } from '../../actions/productOverview/expandedView.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  carouselPosition: state.carouselPosition,
  toggleZoom: state.expandedView.toggleZoom,
});

const mapDispatchToProps = (dispatch) => ({
  handleCarouselChange: (position) => { dispatch(carouselPositionAction(position)); },
  handleImageClick: () => { dispatch(zoomViewAction()); },
  exitExpandedView: () => { dispatch(expandedViewAction()); },
});

const ExpandedViewContainer = connect(mapStateToProps, mapDispatchToProps)(ExpandedView);

export default ExpandedViewContainer;
