import Redux from 'redux';


var testReducer2 = (state = null, action) => {
  switch (action.type) {
  case 'TEST_ACTION':
    return action.test || null;
  default:
    return state;
  }
};

export default testReducer2;