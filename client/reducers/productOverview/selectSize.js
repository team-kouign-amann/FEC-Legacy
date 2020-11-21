const selectSizeReducer = (state = true, action) => {
  if (action.type === 'SELECT-SIZE') {
      if (state === true) {
        return false;
      } else {
        return true;
    }
  } else {
      return state;
    }
};

export default selectSizeReducer;
