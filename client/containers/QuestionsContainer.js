import { connect } from 'react-redux';
import Questions from '../components/widgets/Questions/Questions.jsx';
import allQuestions from '../actions/allQuestions.js';

var mapStateToProps = (state) => ({
  data: state.currentQuestions.data,
  id: state.currentQuestions.id,
});

const mapDispatchToProps = (dispatch) => ({
  allQuestions: (productID) => dispatch(allQuestions(productId)),
});

var QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

export default QuestionsContainer;
