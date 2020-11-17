import { connect } from 'react-redux';
import Related from '../components/widgets/Related/Related.jsx';


var mapStateToProps = (state) => ({
  relatedInfo: state.relatedInfo
});

var RelatedContainer = connect(mapStateToProps, null)(Related);

export default RelatedContainer;