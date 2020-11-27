const questionHelpful = (questionsArr, questionId, votedAlready) => {
  let newQuestionArr = [...questionsArr];
  if (!votedAlready.includes(questionId)) {
    for (let i = 0; i < newQuestionArr.length; i++) {
      if (newQuestionArr[i].question_id === questionId) {
        newQuestionArr[i].question_helpfulness =
          newQuestionArr[i].question_helpfulness + 1;
      }
    }
  }
  console.log('heynitvh', votedAlready);
  let newVoted = [...votedAlready];
  newVoted.push(questionId);

  console.log('CHANGE', newQuestionArr, questionsArr);

  return (dispatch) => {
    dispatch({
      type: 'HELPFUL_CHANGE',
      questions: newQuestionArr,
      votedAlready: newVoted,
    });
  };
};

export default questionHelpful;
