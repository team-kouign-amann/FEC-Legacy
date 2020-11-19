import Redux from 'redux';

var questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'RELATED_QUESTION':
      console.log('reducerData', action.data);
      console.log('reducerId', action.id);
      return { data: action.data, id: action.id } || [];
    default:
      return state;
  }
};

export default questionsReducer;
