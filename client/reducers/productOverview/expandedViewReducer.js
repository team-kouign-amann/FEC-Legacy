const expandedViewReducer = (state = false, action) => {
  if (action.type === 'TOGGLE-EXPANDED-VIEW') {
    if (state === false) {
      return true;
    }
    return false;
  }

  return state;
};

export default expandedViewReducer;
