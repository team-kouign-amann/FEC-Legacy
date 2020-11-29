import axios from 'axios';

const addQuestions = (params) => {
  console.log('params', params);
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `http://3.21.164.220/qa/questions`,
      data: params,
    })
      .then(() => {
        dispatch({
          type: 'ADD_QUESTION',
        });
      })
      .catch((err) => {
        console.log('Error with update questions help: ', err);
      });
  };
};

export default addQuestions;

//   console.log('success', params);
//   console.log('productID', params.product_id);
//   let productId = params.product_id;
//   return axios.get(
//     `http://3.21.164.220/qa/questions?product_id=${productId}&count=50`
//   );
// })
// .then(({ data }) => {
//   console.log('grrr', data);
//   let questions = data.results;
//   console.log('unsortedTotalQuestions', questions);
//   questions.sort(
//     (a, b) => b.question_helpfulness - a.question_helpfulness
//   );

// questions: questions,
