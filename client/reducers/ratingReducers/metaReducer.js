const initialState = {
  characteristics: [],
  recommended: {
    0: 0,
    1: 0,
    null: 0,
  },
  ratings: []
};

const ratingReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case 'CURRENT_METADATA':
      return action.metaRatings;
    default:
      return state;
  }
};

export default ratingReducer;
