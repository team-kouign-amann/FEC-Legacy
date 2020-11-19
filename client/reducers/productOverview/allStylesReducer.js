const allStylesReducer = (state = [], action) => {
  if (action.type === 'STYLES') {
    return action.payload;
  } else {
    return state;
  }
};

export default allStylesReducer;
