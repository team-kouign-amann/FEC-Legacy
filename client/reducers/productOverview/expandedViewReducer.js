const expandedViewReducer = (state = {toggleExpanded: false, toggleZoom: false}, action) => {
  if (action.type === 'TOGGLE-EXPANDED-VIEW') {
    if (state.toggleExpanded === false) {
      return { ...state, toggleExpanded: true};
    }
    return { ...state, toggleExpanded: false };
  } else if (action.type === 'TOGGLE-ZOOM-VIEW') {
    if (state.toggleZoom === false) {
      return { ...state, toggleZoom: true}
    }
    return { ...state, toggleZoom: false}
  }

  return state;
};

export default expandedViewReducer;
