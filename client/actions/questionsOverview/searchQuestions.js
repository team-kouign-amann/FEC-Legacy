const inputSearch = (input, questionsArr) => {
  let newQuestionArr = [...questionsArr];
  console.log('input', input);
  let filteredQs;
  if (input.length < 3) {
    filteredQs = null;
  } else {
    filteredQs = newQuestionArr.filter((question) => {
      return question.question_body.toLowerCase().includes(input.toLowerCase());
    });
  }
  console.log('heynitvh', filteredQs);

  return (dispatch) => {
    dispatch({
      type: 'SEARCH_CHANGE',
      filterQs: filteredQs,
    });
  };
};

export default inputSearch;
