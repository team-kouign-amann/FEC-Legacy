const initialState = {
  currentSize: 'SELECT SIZE',
  display: false,
  maxQuantity: 0,
};

const selectSizeReducer = (state = initialState, action) => {
  if (action.type === 'SELECT-SIZE') {
      if (state.display === true) {
        return {...state, display: false};
      } else {
        return {...state, display: true};
    }
  } else if (action.type === 'CURRENT-SIZE') {
      return {...state, currentSize: action.payload};
  } else if (action.type === 'MAX-QUANTITY') {
    return {...state, maxQuantity: action.payload};
  } else {
    return state;
  }
};

export default selectSizeReducer;
