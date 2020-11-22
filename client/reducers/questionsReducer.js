import Redux from 'redux';

var questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'RELATED_QUESTION':
      console.log('reducerData', action.data);
      console.log('reducerId', action.id);
      return {
        ...state,
        data: action.data,
        id: action.id,
        count: action.count,
      };
    case 'RELATED_ANSWERS':
      console.log('testAnsData', action);
      return { ...state, answers: action.data, init: action.init };
    case 'QUESTION_CHECK':
      console.log('QUESTION_CHECK', action);
      return { ...state, total: action.total };
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
