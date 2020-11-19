import axios from 'axios';

function getQuestions(productId) {
  return (dispatch) => {
    return axios
      .get(`http://3.21.164.220/qa/questions?product_id=${productId}&count=2`)
      .then(({ data }) => {
        console.log('Questions:', data);
        dispatch({
          type: 'RELATED_QUESTION',
          data: data.results,
          id: data.product_id,
        });
      })
      .catch((error) => {
        console.log('Error with GET questions: ', error);
      });
  };
}

export default getQuestions;
