import React from "react";
// import moment from 'moment';
import Answers from './Answers.jsx';
// import 'core-js';
// import 'regenerator-runtime';


const Questions = (props) => {
  
  // {console.log('props.data:', props.data)}
  {console.log('props.questions:', props.questions)}
  {console.log('props.filterQs:', props.filterQs)}
    
  let questions;
  if (!props.filterQs) {
    questions = props.questions.slice(0, props.numRender);
  } else {
    questions = props.filterQs;
  }
  
  
  return(
    <div className="quest-wrap">
    <div className="row">
      <div>
        <h3>QUESTIONS &amp; ANSWERS</h3>
      </div>
      <div>
        <div class="search">
          <input type="text" class="searchTerm" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={(e) => props.inputSearch(e.target.value, props.questions)}></input>
          <button type="submit" class="searchButton">
            <i class="fas fa-search"></i> 
          </button>
        </div>
      </div>
    </div>
    <div className="row">
        {questions.map((question) => (
          <div>
            <div className="question_column_one">
            <div><span>Q: {question.question_body}</span></div>
              <Answers question={question} answerBoolean={props.answerBoolean} moreAnswers={props.moreAnswers} answerHelpful={(answerId) => props.answerHelpful(props.questions, question.question_id, answerId, props.votedAnswer)}/>
            </div>
              <div className="question_column_two">
                  <div>Helpful? <span className="btn_words" onClick={() => props.questionHelpful(props.questions, question.question_id, props.votedAlready)}>Yes</span> ({question.question_helpfulness}) | <span className="btn_words">Add Answer</span></div>
              </div>
          </div>
                ))}
          <div className="row">
            <div className="question_column_one">
              {(() => {
                if (questions.length < props.questions.length) {
                return (<div><span><button onClick={() => props.moreQuestions(props.numRender + 2, props.questions)}>MORE ANSWERED QUESTION</button></span></div>)
              } else {
                return null;
              }
            })()}
            <span><button>ADD A QUESTION  +</button></span>
            </div>
          </div>
    </div>
  </div>
  );
}

export default Questions;



  // let defaultAnswers = (answers) => {
  //   console.log('default:', answers)
  //   return Object.values(answers).slice(0, 1);
  // }

  // let getAllAnswers = (answers) => {
  //   console.log('here:', answers)
  //   return Object.values(answers);
  // }

  // let questions = props.data.results;