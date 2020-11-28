const initialState = {
  outfitInfo: [],
  loading: false,
};

const outfitInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_OUTFIT_DETAILS_SUCCESS':
      return { outfitInfo: action.payload, loading: false };
    case 'FETCH_OUTFIT_DETAILS':
      return { ...state, loading: true };
    case 'FETCH_OUTFIT_DETAILS_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default outfitInfoReducer;