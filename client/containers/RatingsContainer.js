import { connect } from 'react-redux';
import Ratings from '../components/widgets/Ratings/Ratings.jsx';


var mapStateToProps = (state) => ({

});

var RatingsContainer = connect(mapStateToProps, null)(Ratings);

export default RatingsContainer;