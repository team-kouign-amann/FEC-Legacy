import { connect } from 'react-redux';
import Carousel from '../../components/widgets/Product/productComponents/Carousel.jsx';
import carouselPositionAction from '../../actions/productOverview/carouselPosition.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  carouselPosition: state.carouselPosition,
});

const mapDispatchToProps = (dispatch) => ({
  handleCarouselChange: (position) => { dispatch(carouselPositionAction(position)); },
});

const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;
