import { connect } from 'react-redux';
import PreviewListEntry from '../../components/widgets/Product/productComponents/PreviewListEntry.jsx';
import carouselPositionAction from '../../actions/productOverview/carouselPosition.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  carouselPosition: state.carouselPosition,
});

const mapDispatchToProps = (dispatch) => ({
  handlePreviewClick: (position) => { dispatch(carouselPositionAction(position)); },
});

const PreviewListEntryContainer = connect(mapStateToProps, mapDispatchToProps)(PreviewListEntry);

export default PreviewListEntryContainer;
