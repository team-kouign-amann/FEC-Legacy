import Redux from 'redux';

let initialState = {
  votedAlready: [],
  votedAnswer: [],
};

var questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_DATA':
      console.log('QuestionsREducer', action);
      return {
        ...state,
        questions: action.questions,
        numRender: action.numRender,
        id: action.id,
      };
    case 'NEW_NUM':
      return {
        ...state,
        numRender: action.numRender,
      };
    case 'SHOW_ANSWERS':
      return { ...state, answerBoolean: action.answerBoolean };
    case 'HELPFUL_CHANGE':
      console.log('hihi');
      return {
        ...state,
        questions: action.questions,
        votedAlready: action.votedAlready,
      };
    case 'HELPFUL_ANSWER':
      return {
        ...state,
        questions: action.questions,
        votedAnswer: action.votedAnswer,
      };
    case 'SEARCH_CHANGE':
      return {
        ...state,
        filterQs: action.filterQs,
      };
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
