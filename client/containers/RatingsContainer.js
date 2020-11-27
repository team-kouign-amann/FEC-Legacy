import { connect } from 'react-redux';
import Ratings from '../components/widgets/Ratings/Ratings.jsx';
import clickTrackerWrapper from '../../util/clickTrackerWrapper.jsx';

const mapStateToProps = (state) => ({
  showReviews: state.showReviews,
  metaRatings: state.metaRatings
});

// const mapDispatchToProps = (dispatch) => ({
//   handleHelpfulClick: (reviews) => {
//     dispatch(handleHelpfulClick(reviews));
//   },

// });

const RatingsContainer = connect(mapStateToProps, null)(clickTrackerWrapper(Ratings, 'Ratings'));

export default RatingsContainer;
