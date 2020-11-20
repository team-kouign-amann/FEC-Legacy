const previewListReducer = (state = { first: 0, last: 4 }, action) => {
  if (action.type === 'PREVIEW-FIRST') {
    return { ...state, first: action.payload };
  } else if (action.type === 'PREVIEW-LAST') {
    return { ...state, last: action.payload };
  } else {
    return state;
  }
};

export default previewListReducer;
