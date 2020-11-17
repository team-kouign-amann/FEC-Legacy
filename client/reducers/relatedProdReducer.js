const relatedInfoReducer = (state = [], action) => {
  if (action.type === 'RELATED_PROD') {
    return action.payload;
  } else {
    return state;
  }
};

export default relatedInfoReducer;