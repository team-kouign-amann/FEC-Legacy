const moreQuestions = (allQuestions, amount) => {
  return (dispatch) => {
    let sortedQuestions;
    (function (allQuestions) {
      sortedQuestions = allQuestions.sort(
        (a, b) => b.question_helpfulness - a.question_helpfulness
      );
    })(allQuestions);
    console.log('sorted', sortedQuestions);
    let renderedQuestions;
    (function (sortedQuestions, amount) {
      let initialQuestions = sortedQuestions.slice(0, amount);
      renderedQuestions = initialQuestions;
    })(sortedQuestions, amount);
    console.log('nonononoo', renderedQuestions);
    // if (init) {
    dispatch({
      type: 'MORE_QUESTIONS',
      questions: renderedQuestions,
      count: amount,
    });
    return renderedQuestions;
    // }
    // else {
    //   return {
    //     type: 'MORE_QUESTIONS',
    //     questions: renderedQuestions,
    //     count: amount,
    //   };
    // }
  };
};

export default moreQuestions;
