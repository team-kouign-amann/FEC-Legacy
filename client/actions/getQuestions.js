import axios from 'axios';
// import 'core-js';
// import 'regenerator-runtime';
// import getAnswers from './getAnswers.js';

function getQuestions(productId, count) {
  return (dispatch) => {
    // console.log('PORDUCTID', productId);
    // console.log('NEWCOUNT', count);
    // console.log('INTINIT', init);
    return axios
      .get(
        `http://3.21.164.220/qa/questions?product_id=${productId}&count=${count}`
      )
      .then(({ data }) => {
        console.log('grrr', data);
        let questions = data.results;
        let allAnswerObj = {};
        for (let i = 0; i < questions.length; i++) {
          let eachAnswerArray = Object.values(questions[i].answers);
          allAnswerObj[questions[i].question_id] = eachAnswerArray;
        }
        console.log('mgk', allAnswerObj);
        dispatch({
          type: 'ALL_DATA',
          data: questions,
          id: data.product_id,
          allAnswers: allAnswerObj,
          // questions: data.results,
          // count: 4,
        });
        return [questions, allAnswerObj];
      })
      .catch((error) => {
        console.log('Error with GET questions: ', error);
      });
  };
}

export default getQuestions;

// .then(async (data) => {
//   let eachQuestion = data.results;
//   // let questionIdsArr = [];
//   let questionId = {};
//   console.log('QUESTIONHAH', eachQuestion);
//   for (var j = 0; j < eachQuestion.length; j++) {
//     questionId[eachQuestion[j].question_id] = [null, true];
//   }
//   console.log('This is how we do', questionId);
//   let ansDispatch = await getAnswers(questionId);
//   console.log('thisbetterwork', ansDispatch);
//   return ansDispatch;
// })
// .then((data) => {
//   // console.log('dispatcher', data);
//   dispatch({
//     type: 'RELATED_ANSWERS',
//     data: data,
//     // init: init,
//   });
// })
