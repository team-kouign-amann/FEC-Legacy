import { connect } from 'react-redux';
import Questions from '../components/widgets/Questions/Questions.jsx';


var mapStateToProps = (state) => ({

});

var QuestionsContainer = connect(mapStateToProps, null)(Questions);

export default QuestionsContainer;