import React from "react";
// import moment from 'moment';
import Answers from './Answers.jsx';
// import 'core-js';
// import 'regenerator-runtime';


const Questions = (props) => {
  
  // {console.log('props1!:', props)}
  {console.log('props.data:', props.data)}
  {console.log('props.count:', props.count)}
  {console.log('props.questions:', props.questions)}
  {console.log('props.allAnswers:', props.allAnswers)}

  let questions = props.questions.slice(0, numRender);
  
  
  return(
    <div className="quest-wrap">
    <div className="row">
      <div>
        <h3>QUESTIONS &amp; ANSWERS</h3>
      </div>
      <div>
        <div class="search">
          <input type="text" class="searchTerm" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
          <button type="submit" class="searchButton">
            <i class="fas fa-search"></i> 
          </button>
        </div>
      </div>
    </div>
    <div className="row">
        {props.questions.map((question) => (
          <div>
            <div className="question_column_one">
            <div><span>Q: {question.question_body}</span></div>
              <Answers questions={props.questions} question={question} moreAnswers={props.moreAnswers} allAnswers={props.allAnswers} answers={props.answers}/>
            </div>
              <div className="question_column_two">
                  <div>Helpful? <span className="btn_words">Yes</span> ({question.question_helpfulness}) | <span className="btn_words">Add Answer</span></div>
              </div>
          </div>
                ))}
          <div className="row">
            <div className="question_column_one">
              {(() => {
                if (props.count < props.data.length) {
                return (<div><span><button onClick={() => props.moreQuestions(props.data, props.count + 2)}>MORE ANSWERED QUESTION</button></span><span><button>ADD A QUESTION  +</button></span></div>)
              } else {
                return null;
              }
            })()}
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