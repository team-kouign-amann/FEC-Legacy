const answerHelpful = (questionsArr, questionId, answerId, votedAlready) => {
  console.log('TOMMMYYYY', votedAlready);
  let newQuestionArr = [...questionsArr];
  if (!votedAlready.includes(answerId)) {
    for (let i = 0; i < newQuestionArr.length; i++) {
      if (newQuestionArr[i].question_id === questionId) {
        let answers = newQuestionArr[i].answers;
        for (let key in answers) {
          console.log('Mattty', key);
          if (answers[key].id === answerId) {
            answers[key].helpfulness = answers[key].helpfulness + 1;
          }
        }
      }
    }
  }

  let newVoted = [...votedAlready];
  newVoted.push(answerId);

  console.log('ANSWER:CHANGE', newQuestionArr, questionsArr);

  return (dispatch) => {
    dispatch({
      type: 'HELPFUL_ANSWER',
      questions: newQuestionArr,
      votedAnswer: newVoted,
    });
  };
};

export default answerHelpful;
