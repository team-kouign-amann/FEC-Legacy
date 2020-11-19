function allQuestions(productId) {
  return (dispatch) => {
    return axios
      .get(`http://3.21.164.220/qa/questions?product_id=${productId}`)
      .then(({ data }) => {
        console.log('ALLQuestions:', data);
        dispatch({ type: 'RELATED_QUESTION', data: data });
      })
      .catch((error) => {
        console.log('Error with GET questions: ', error);
      });
  };
}

export default allQuestions;
