import Redux from 'redux';

var questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_DATA':
      console.log('QuestionsREducer', action);
      return {
        ...state,
        data: action.data,
        id: action.id,
        allAnswers: action.allAnswers,
        questions: action.questions,
        count: action.count,
      };
    case 'MORE_QUESTIONS':
      console.log('MORE_QUESTIONS', action);
      return { ...state, questions: action.questions, count: action.count };
    case 'MORE_ANSWERS':
      console.log('MORE_ANSWERS', action);
      return { ...state, answers: action.answers };
    default:
      return state;
  }
};

export default questionsReducer;

// var initialState = {
//   currentQuestions: {
//     data: [
//       {
//         question_body: 'N/A',
//         answers: {
//           body: 'N/A',
//           answerer_name: 'N/A',
//           date: 'N/A',
//           helpfulness: 0,
//         },
//       },
//     ],
//     id: 1,
//   },
// };

// case 'NEW_QUESTION':
//   console.log('newQuestions', action);
//   return {
//     ...state,
//     data: action.data,
//     count: action.count,
//     total: action.total,
//   };
// case 'RELATED_ANSWERS':
//   console.log('testAnsData', action);
//   return { ...state, answers: action.data };
