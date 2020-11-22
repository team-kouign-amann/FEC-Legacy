import axios from 'axios';
// import 'core-js';
// import 'regenerator-runtime';

function getAnswers(questionId, count, init) {
  return (dispatch) => {
    console.log('LETES SEE:', questionId);
    return axios
      .get(
        `http://3.21.164.220/qa/questions/${questionId}/answers?count=${count}`
      )
      .then(({ data }) => {
        console.log('LOLO', data);
        let answerObj = {};
        answerObj[questionId] = data.results;
        console.log('HOW WE DOING!?', answerObj);
        return answerObj;
      })
      .then((data) => {
        dispatch({
          type: 'RELATED_ANSWERS',
          data: data,
          init: init,
        });
      })
      .catch((error) => {
        console.log('Error with GET questions: ', error);
      });
  };
}

export default getAnswers;
