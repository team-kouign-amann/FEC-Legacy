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
    case 'UPDATE_RELATED_PRODUCT_WITH_IMAGE':
      console.log(' the product ', action.payload);
      console.log('all products? ', state.relatedProducts);
      let id = action.payload.product_id;
      let product = state.relatedProducts.find((prod) => prod.id == id);
      console.log('matched? ', product);
      return { ...state };
    default:
      return state;
  }
};

export default relatedInfoReducer;
