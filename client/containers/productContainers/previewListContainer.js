import { connect } from 'react-redux';
import PreviewList from '../../components/widgets/Product/productComponents/PreviewList.jsx';
//import carouselPositionAction from '../../actions/productOverview/carouselPosition.js';

const mapStateToProps = (state) => ({
  position: state.previewListPosition,
  // carouselPosition: state.carouselPosition,
});

const mapDispatchToProps = (dispatch) => ({
  handleCarouselChange: (position) => { dispatch(carouselPositionAction(position)); },
});

const PreviewListContainer = connect(mapStateToProps, null)(PreviewList);

export default PreviewListContainer;
