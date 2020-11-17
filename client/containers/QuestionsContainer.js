import { connect } from 'react-redux';
import Questions from '../components/widgets/Questions/Questions.jsx';

var mapStateToProps = (state) => ({
  data: state.questionReducer,
});

const mapDispatchToProps = (dispatch) => ({});

var QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

export default QuestionsContainer;
