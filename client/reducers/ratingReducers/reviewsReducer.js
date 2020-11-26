const initialState = [];

const reviewsReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case 'CURRENT_REVIEWS':
      return action.showReviews;

    case 'ADD_REVIEWS':
      return { reviews: [action.review, ...state.reviews] };

    default:
      return state;
  }
};

export default reviewsReducer;
