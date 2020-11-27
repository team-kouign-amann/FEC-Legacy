import axios from 'axios';
// import 'core-js';
// import 'regenerator-runtime';
// import getAnswers from './getAnswers.js';

function getQuestions(productId, count) {
  return (dispatch) => {
    return axios
      .get(
        `http://3.21.164.220/qa/questions?product_id=${productId}&count=${count}`
      )
      .then(({ data }) => {
        // console.log('grrr', data);
        let questions = data.results;
        console.log('unsortedTotalQuestions', questions);
        questions.sort(
          (a, b) => b.question_helpfulness - a.question_helpfulness
        );
        dispatch({
          type: 'ALL_DATA',
          questions: questions,
          numRender: 4,
          votedAlready: [],
          votedAnswer: [],
        });
        return questions;
      })
      .then((data) => {
        console.log('allQuestions', data);
        let questionIds = {};
        for (let i = 0; i < data.length; i++) {
          questionIds[data[i].question_id] = true;
        }
        console.log('Questionids', questionIds);
        dispatch({
          type: 'SHOW_ANSWERS',
          answerBoolean: questionIds,
        });
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
