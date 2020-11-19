const carouselPositionReducer = (state = 0, action) => {
  if (action.type === 'CAROUSEL-POSITION') {
    return action.payload;
  } else {
    return state;
  }
};

export default carouselPositionReducer;
