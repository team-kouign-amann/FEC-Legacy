import { connect } from 'react-redux';
import Questions from '../components/widgets/Questions/Questions.jsx';
// import getQuestions from '../actions/getQuestions.js';
// import getAnswers from '../actions/getAnswers.js';
// import newQuestions from '../actions/newQuestions.js';
import moreQuestions from '../actions/moreQuestions.js';
import moreAnswers from '../actions/moreAnswers.js';
import 'core-js';
import 'regenerator-runtime';

const mapStateToProps = (state) => ({
  data: state.currentQuestions.data,
  allAnswers: state.currentQuestions.allAnswers,
  id: state.currentQuestions.id,
  questions: state.currentQuestions.questions,
  count: state.currentQuestions.count,
  answers: state.currentQuestions.answers,
});

const mapDispatchToProps = (dispatch) => ({
  // newQuestions: async (productId, count, answers) =>
  //   dispatch(await newQuestions(productId, count, answers)),
  // getAnswers: async (questionId, changeAnswerId) =>
  //   dispatch(await getAnswers(questionId, changeAnswerId)),
  moreQuestions: (questions, amount, allAnswers) =>
    dispatch(moreQuestions(questions, amount, allAnswers)),
  moreAnswers: (answers, questions, init, questionId, toggle) =>
    dispatch(moreAnswers(answers, questions, init, questionId, toggle)),
});

var QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

export default QuestionsContainer;
