const initialState = {
  currentQuantity: 'QUANTITY',
  display: false,
};

const selectQuantityReducer = (state = initialState, action) => {
  if (action.type === 'SELECT-QUANTITY') {
      if (state.display === true) {
        return { ...state, display: false};
      } else {
        return {...state, display: true};
    }
  } else if (action.type === 'CURRENT-QUANTITY') {
      return {...state, currentQuantity: action.payload};
  } else {
    return state;
  }
};

export default selectQuantityReducer;
