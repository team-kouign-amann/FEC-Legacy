import { connect } from 'react-redux';
import Questions from '../components/widgets/Questions/Questions.jsx';
import getQuestions from '../actions/questionsOverview/getQuestions.js';
// import getAnswers from '../actions/getAnswers.js';
// import newQuestions from '../actions/newQuestions.js';
import moreQuestions from '../actions/questionsOverview/moreQuestions.js';
import moreAnswers from '../actions/questionsOverview/moreAnswers.js';
import questionHelpful from '../actions/questionsOverview/questionHelpful.js';
import answerHelpful from '../actions/questionsOverview/answerHelpful.js';
import inputSearch from '../actions/questionsOverview/searchQuestions.js';
import addQuestions from '../actions/questionsOverview/addQuestions.js';

const mapStateToProps = (state) => ({
  // data: state.currentQuestions.data,
  questions: state.currentQuestions.questions,
  numRender: state.currentQuestions.numRender,
  answerBoolean: state.currentQuestions.answerBoolean,
  votedAlready: state.currentQuestions.votedAlready,
  votedAnswer: state.currentQuestions.votedAnswer,
  votedAnswer: state.currentQuestions.votedAnswer,
  filterQs: state.currentQuestions.filterQs,
  // allAnswers: state.currentQuestions.allAnswers,
  id: state.currentQuestions.id,
  // count: state.currentQuestions.count,
  // answers: state.currentQuestions.answers,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (productId) => dispatch(getQuestions(productId)),
  moreQuestions: (newNum) => dispatch(moreQuestions(newNum)),
  moreAnswers: (booleanObj, questionId) =>
    dispatch(moreAnswers(booleanObj, questionId)),
  questionHelpful: (questionId, votedAlready, id) =>
    dispatch(questionHelpful(questionId, votedAlready, id)),
  answerHelpful: (answerId, votedAlready, product_id) =>
    dispatch(answerHelpful(answerId, votedAlready, product_id)),
  inputSearch: (input, questions) => dispatch(inputSearch(input, questions)),
  addQuestions: (params) => dispatch(addQuestions(params)),
});

var QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

export default QuestionsContainer;

// newQuestions: async (productId, count, answers) =>
//   dispatch(await newQuestions(productId, count, answers)),
// getAnswers: async (questionId, changeAnswerId) =>
//   dispatch(await getAnswers(questionId, changeAnswerId)),
// moreAnswers: (answers, questions, init, questionId, toggle) =>
//   dispatch(moreAnswers(answers, questions, init, questionId, toggle)),
