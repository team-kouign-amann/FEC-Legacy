const sampleProduct = {
  "id": 1,
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140",
  "features": [
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}

const currentProductReducer = (state = sampleProduct, action) => {
  if (action.type === "CURRENT_PRODUCT") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentProductReducer;
