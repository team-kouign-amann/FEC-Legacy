import { connect } from 'react-redux';
import Questions from '../components/widgets/Questions/Questions.jsx';
import getQuestions from '../actions/getQuestions.js';
import getAnswers from '../actions/getAnswers.js';

const mapStateToProps = (state) => ({
  data: state.currentQuestions.data,
  id: state.currentQuestions.id,
  answers: state.currentQuestions.answers,
  init: state.currentQuestions.init,
  count: state.currentQuestions.count,
  total: state.currentQuestions.total,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (productId, count, init) =>
    dispatch(getQuestions(productId, count, init)),
  getAnswers: (questionId, count, init) =>
    dispatch(getAnswers(questionId, count, init)),
});

var QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

export default QuestionsContainer;
