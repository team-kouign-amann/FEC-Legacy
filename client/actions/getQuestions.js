import axios from 'axios';
import 'core-js';
import 'regenerator-runtime';

function getQuestions(productId, count, init) {
  return (dispatch) => {
    return axios
      .get(
        `http://3.21.164.220/qa/questions?product_id=${productId}&count=${count}`
      )
      .then(({ data }) => {
        console.log('Questions:', data);

        dispatch({
          type: 'RELATED_QUESTION',
          data: data.results,
          id: data.product_id,
          count: count,
        });
        return data;
      })
      .then(async (data) => {
        let result = data.results;
        console.log('this is it', result);
        let answerObj = {};
        let answerLimit = null;
        console.log('init 1', init);
        if (init) {
          answerLimit = 2;
        }
        if (!init) {
          answerLimit = 5;
        }
        console.log('init 2', init);
        console.log('Lets see the count', answerLimit);
        for (var i = 0; i < result.length; i++) {
          let questionID = result[i].question_id;
          console.log('this is it where it is', questionID);
          let tempData = await axios.get(
            `http://3.21.164.220/qa/questions/${data.results[i].question_id}/answers?count=${answerLimit}`
          );
          answerObj[questionID] = tempData.data.results;
        }
        console.log('answerObj', answerObj);
        return answerObj;
      })
      .then((data) => {
        console.log('Lets see', data);
        dispatch({
          type: 'RELATED_ANSWERS',
          data: data,
          init: init,
        });
      })
      .then(() => {
        return axios
          .get(
            `http://3.21.164.220/qa/questions?product_id=${productId}&count=50`
          )
          .then(({ data }) => {
            console.log('totalQuestions', data.results.length);
            return data.results.length;
          })
          .then((data) => {
            console.log('total:', data);
            dispatch({
              type: 'QUESTION_CHECK',
              total: data,
            });
          })
          .catch((error) => {
            console.log('Error with GET total: ', error);
          });
      })
      .catch((error) => {
        console.log('Error with GET questions: ', error);
      });
  };
}

export default getQuestions;
