import Redux from 'redux';

var questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'RELATED_QUESTION':
      return action.data || null;
    default:
      return state;
  }
};

export default questionsReducer;
