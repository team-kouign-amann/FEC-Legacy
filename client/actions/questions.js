import axios from 'axios';

function getQuestions() {
  return (dispatch) => {
    return axios
      .get('http://3.21.164.220/qa/questions?product_id=5')
      .then(({ results }) => {
        dispatch({ type: 'RELATED_QUESTION', data: results });
      });
  };
}

export default getQuestions;
