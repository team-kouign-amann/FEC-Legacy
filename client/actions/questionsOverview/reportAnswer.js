import axios from 'axios';

const reportAnswer = (answerId, answer, questionID, productId) => {
  console.log('ran', answer);
  console.log('here', productId);
  // let newReported = [...reportedAlready];
  return (dispatch) => {
    // if (!reportedAlready.includes(answerId)) {
    return axios
      .put(`http://3.21.164.220/qa/answers/${answerId}/report`)
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
        // newReported.push(answerId);
        // console.log('hit');
        let underReviewAnswer = {};
        answer.reported = true;
        underReviewAnswer[questionID] = answer;
        console.log('this is important', underReviewAnswer);
        let underReviewArray = [];
        underReviewArray.push(underReviewAnswer);
        dispatch({
          type: 'REPORT_ANSWER',
          questions: questions,
          // reportedAnswer: newReported,
          underReview: underReviewArray,
        });
      })
      .catch((error) => {
        console.log('Error with update questions help: ', error);
      });
    // }
  };
};

export default reportAnswer;
