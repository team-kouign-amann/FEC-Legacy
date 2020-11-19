import Redux from 'redux';

const ratingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_REVIEWS':
      return { reviews: action.showReviews };

    case 'CURRENT_METADATA':
      return { metadata: action.showReviews };

    case 'ADD_REVIEWS':
      return { reviews: [action.review, ...state.reviews] };

    default:
      return state;
  }
};

export default ratingReducer;
