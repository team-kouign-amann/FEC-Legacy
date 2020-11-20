import { connect } from 'react-redux';
import Ratings from '../components/widgets/Ratings/Ratings.jsx';

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  metaData: state.metaData,
});

const mapDispatchToProps = (dispatch) => ({
  handleHelpfulClick: (reviews) => {
    dispatch(handleHelpfulClick(reviews));
  },

});

const RatingsContainer = connect(mapStateToProps, mapDispatchToProps)(Ratings);

export default RatingsContainer;
