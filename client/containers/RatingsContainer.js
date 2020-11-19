import { connect } from 'react-redux';
import Ratings from '../components/widgets/Ratings/Ratings.jsx';

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  changeReviewsOrder: (reviews) => {
    dispatch(changeReviewsOrder(reviews));
  },
});

const RatingsContainer = connect(mapStateToProps, mapDispatchToProps)(Ratings);

export default RatingsContainer;
