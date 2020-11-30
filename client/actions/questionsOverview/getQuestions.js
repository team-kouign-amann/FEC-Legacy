import axios from 'axios';
// import 'core-js';
// import 'regenerator-runtime';
// import getAnswers from './getAnswers.js';

function getQuestions(productId) {
  return (dispatch) => {
    return axios
      .get(`http://3.21.164.220/qa/questions?product_id=${productId}&count=50`)
      .then(({ data }) => {
        // console.log('grrr');
        let questions = data.results;
        let product_id = data.product_id;
        // console.log('unsortedTotalQuestions', questions);
        questions.sort(
          (a, b) => b.question_helpfulness - a.question_helpfulness
        );

        // console.log('allQuestions', questions);

        let questionIds = {};

        for (let i = 0; i < questions.length; i++) {
          questionIds[questions[i].question_id] = true;
        }

        dispatch({
          type: 'ALL_DATA',
          questions: questions,
          numRender: 4,
          id: product_id,
          answerBoolean: questionIds,
        });

        // console.log('Questionids', questionIds);
        // console.log('IT WORKED');
        return questions;
      })
      .then(() => {
        return axios.get(`http://3.21.164.220/products/${productId}`);
      })
      .then(({ data }) => {
        let productName = data.name;
        // console.log('productName', productName, data);
        dispatch({
          type: 'PRODUCT_NAME',
          productName: productName,
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
