const initialState = {
  relatedProducts: [],
  loading: false,
};

const relatedInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_SUCCESS':
      // console.log('action payload: ', action.payload);
      return { relatedProducts: action.payload, loading: false };
    case 'FETCH_RELATED':
      return { ...state, loading: true };
    case 'FETCH_RELATED_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default relatedInfoReducer;
