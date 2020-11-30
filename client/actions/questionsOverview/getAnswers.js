// import axios from 'axios';
// import 'core-js';
// import 'regenerator-runtime';

// async function getAnswers(questionIds, changeAnswerId) {
//   try {
//     // let result = data.results;
//     console.log('this is it', questionIds);
//     console.log('this is it]s', changeAnswerId);
//     // console.log('init 2', init);
//     // let output = [];
//     let answerObj = {};
//     for (let key in questionIds) {
//       let questionID = Number(key);
//       let answer = questionIds[questionID][1];
//       let answerArr = [];
//       let init;
//       let answerLimit;
//       console.log('yoyoyo', answer);
//       if (questionID === changeAnswerId) {
//         init = !answer;
//       } else {
//         init = answer;
//       }
//       if (init === false) {
//         answerLimit = 5;
//       } else {
//         answerLimit = 2;
//       }
//       console.log('this is it where it is', questionID, changeAnswerId);
//       console.log('Lets see the init', init);
//       console.log('Lets see the count', answerLimit);
//       let tempData = await axios.get(
//         `http://3.21.164.220/qa/questions/${questionID}/answers?count=${answerLimit}`
//       );
//       answerArr.push(tempData.data.results);
//       answerArr.push(init);
//       answerObj[questionID] = answerArr;
//     }
//     if (changeAnswerId) {
//       return { type: 'RELATED_ANSWERS', data: answerObj };
//     } else {
//       return answerObj;
//     }
//   } catch (error) {
//     console.log('Error with GET total: ', error);
//   }
// }

// export default getAnswers;

// .then((data) => {
//   // done(null);
// })

// let answerLimit = null;
// console.log('init 1', init);
// if (changeAnswerId) {
//   if (!questionIds[changeAnswerId].init) {
//     answerLimit = 2;
//   }
//   if (questionIds[changeAnswerId].init) {
//     answerLimit = 5;
//   }
// } else {
//   answerLimit = 2;
// }
