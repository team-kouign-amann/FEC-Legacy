import axios from 'axios';

const questionHelpful = (questionId, votedAlready, productId) => {
  // let newQuestionArr = [...questionsArr];
  console.log('hit');
  return (dispatch) => {
    let newVoted = [...votedAlready];
    if (!votedAlready.includes(questionId)) {
      return axios
        .put(`http://3.21.164.220/qa/questions/${questionId}/helpful`)
        .then(() => {
          return axios.get(
            `http://3.21.164.220/qa/questions?product_id=${productId}&count=50`
          );
        })
        .then(({ data }) => {
          console.log('grrr', data);
          let questions = data.results;
          console.log('unsortedTotalQuestions', questions);
          questions.sort(
            (a, b) => b.question_helpfulness - a.question_helpfulness
          );
          // let newQuestions = [...questions];
          newVoted.push(questionId);
          console.log('hit');
          dispatch({
            type: 'HELPFUL_CHANGE',
            questions: questions,
            votedAlready: newVoted,
          });
        })
        .catch((error) => {
          console.log('Error with update questions help: ', error);
        });
    }
  };
};

export default questionHelpful;

// for (let i = 0; i < newQuestionArr.length; i++) {
// if (newQuestionArr[i].question_id === questionId) {
//   newQuestionArr[i].question_helpfulness =
//     newQuestionArr[i].question_helpfulness + 1;
// }

// console.log('heynitvh', votedAlready);

// console.log('CHANGE', newQuestionArr, questionsArr);
