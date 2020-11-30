import axios from 'axios';

const addAnswers = (param, bodyParams) => {
  console.log('params', param, bodyParams);
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `http://3.21.164.220/qa/questions/${param}/answers`,
      data: bodyParams,
    })
      .then(() => {
        dispatch({
          type: 'ADD_ANSWER',
        });
      })
      .catch((err) => {
        console.log('Error with adding answer: ', err);
      });
  };
};

export default addAnswers;
