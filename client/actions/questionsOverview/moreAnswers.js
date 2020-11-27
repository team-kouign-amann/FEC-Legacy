const moreAnswers = (booleanObj, questionId) => {
  return (dispatch) => {
    let newBoolean = Object.assign({}, booleanObj);
    console.log('before', newBoolean);
    newBoolean[questionId] = !newBoolean[questionId];
    console.log('after', newBoolean);
    dispatch({
      type: 'SHOW_ANSWERS',
      answerBoolean: newBoolean,
    });
  };
};

export default moreAnswers;

// let renderedAnswers = {};
//     let transformedAnswers = Object.assign({}, allAnswers);
//     for (var i = 0; i < questions.length; i++) {
//       let sortHelp = transformedAnswers[questions[i].question_id].sort(
//         (a, b) => b.helpfulness - a.helpfulness
//       );
//       renderedAnswers[questions[i].question_id] = sortHelp;
//     }
//     console.log('questions', questions);
//     console.log('renderedAnswers', renderedAnswers);
//     // let renderedAnswers;
//     if (init) {
//       let renderedOutput = {};
//       (function (renderedAnswers) {
//         for (let key in renderedAnswers) {
//           let initialAnswers = renderedAnswers[key].slice(0, 2);
//           renderedOutput[key] = initialAnswers;
//         }
//       })(renderedAnswers);
//       console.log('lalala', renderedOutput);
//       dispatch({
//         type: 'MORE_ANSWERS',
//         answers: renderedOutput,
//         // count: amount,
//       });
//     } else {
//       let renderedOutput = {};
//       console.log('likehit', renderedOutput);
//       (function (renderedAnswers, questionId) {
//         for (let key in renderedAnswers) {
//           console.log('likehit', key, questionId);
//           if (Number(key) !== questionId || toggle) {
//             let initialAnswers = renderedAnswers[key].slice(0, 2);
//             renderedOutput[key] = initialAnswers;
//           } else {
//             let initialAnswers = renderedAnswers[key];
//             renderedOutput[key] = initialAnswers;
//           }
//         }
//       })(renderedAnswers, questionId, toggle);
//       console.log('likehit', renderedOutput);
//       dispatch({
//         type: 'MORE_ANSWERS',
//         answers: renderedOutput,
//       });
//     }
