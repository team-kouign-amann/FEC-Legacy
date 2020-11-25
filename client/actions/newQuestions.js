// import axios from 'axios';
// import getAnswers from './getAnswers.js';

// function newQuestions(productId, count, answers) {
//   return axios
//     .get(
//       `http://3.21.164.220/qa/questions?product_id=${productId}&count=${count}`
//     )
//     .then(async ({ data }) => {
//       let eachQuestion = data.results;
//       // let questionIdsArr = [];
//       let questionId = {};
//       console.log('QUESTIONHAH', eachQuestion);
//       console.log('thisiswheretolook', answers);
//       for (var j = 0; j < eachQuestion.length; j++) {
//         if (answers) {
//           if (!answers[eachQuestion[j].question_id]) {
//             questionId[eachQuestion[j].question_id] = [null, true];
//           } else {
//             for (let key in answers) {
//               questionId[key] = answers[key];
//             }
//           }
//         } else {
//           questionId[eachQuestion[j].question_id] = [null, true];
//         }
//       }
//       console.log('This is how we do', questionId);
//       let ansDispatch = await getAnswers(questionId);
//       console.log('thisbetterwork', ansDispatch);
//       return {
//         type: 'NEW_QUESTION',
//         data: data.results,
//         answers: ansDispatch,
//         count: count,
//       };
//     })
//     .catch((error) => {
//       console.log('Error with GET questions: ', error);
//     });
// }

// export default newQuestions;
