import axios from 'axios';

const reportAnswer = (answerId, reportedAlready, productId) => {
  return (dispatch) => {
    if (!reportedAlready.includes(answerId)) {
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
          reportedAlready.push(answerId);
          console.log('hit');
          dispatch({
            type: 'REPORT_ANSWER',
            questions: questions,
            reportedAnswer: reportedAlready,
          });
        })
        .catch((error) => {
          console.log('Error with update questions help: ', error);
        });
    }
  };
};

export default reportAnswer;
