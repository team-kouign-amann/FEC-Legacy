import axios from 'axios';
import 'core-js';
import 'regenerator-runtime';

function getQuestions(productId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://3.21.164.220/qa/questions?product_id=${productId}&count=2`
      );
      console.log('Questions:', response);
      dispatch({
        type: 'RELATED_QUESTION',
        data: response.data.results,
        id: response.data.product_id,
      });
    } catch (error) {
      console.log('Error with GET questions: ', error);
    }

    return 'done';
  };
}

export default getQuestions;
