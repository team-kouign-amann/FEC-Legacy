import axios from 'axios';
const answerHelpful = (answerId, votedAlready, productId) => {
  console.log('TOMMMYYYY', votedAlready);
  let newVoted = [...votedAlready];
  return (dispatch) => {
    if (!votedAlready.includes(answerId)) {
      return axios
        .put(`http://3.21.164.220/qa/answers/${answerId}/helpful`)
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
          newVoted.push(answerId);
          console.log('hit');
          dispatch({
            type: 'HELPFUL_ANSWER',
            questions: questions,
            votedAnswer: newVoted,
          });
        })
        .catch((error) => {
          console.log('Error with update questions help: ', error);
        });
    }
  };
};
export default answerHelpful;

// for (let i = 0; i < newQuestionArr.length; i++) {
//   if (newQuestionArr[i].question_id === questionId) {
//     let answers = newQuestionArr[i].answers;
//     for (let key in answers) {
//       console.log('Mattty', key);
//       if (answers[key].id === answerId) {
//         answers[key].helpfulness = answers[key].helpfulness + 1;
//       }
//     }
//   }
// }

// console.log('ANSWER:CHANGE', newQuestionArr, questionsArr);

// dispatch({
//   type: 'HELPFUL_ANSWER',
//   questions: newQuestionArr,
//   votedAnswer: newVoted,
// });
// };
// }
