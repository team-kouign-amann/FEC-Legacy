import React from "react";
import moment from 'moment';
import Answers from './Answers.jsx';
import { toExponential } from "core-js/fn/number/epsilon";

const Questions = (props) => {
  
  // let defaultAnswers = (answers) => {
  //   console.log('default:', answers)
  //   return Object.values(answers).slice(0, 1);
  // }

  // let getAllAnswers = (answers) => {
  //   console.log('here:', answers)
  //   return Object.values(answers);
  // }

  // let questions = props.data.results;
  {console.log('TESTING1!:', props)}
  {console.log('TESTING2!:', props.data)}
  {console.log('TESTING3!:', props.id)}
  
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
        {props.data.map((question) => (
          <div>
            <div className="question_column_one">
              <Answers question={question} id={props.id} getQuestions={props.getQuestions} answers={props.answers} init={props.init} count={props.count}/>
            </div>
              <div className="question_column_two">
                  <div>Helpful? <span className="btn_words">Yes</span> ({question.question_helpfulness}) | <span className="btn_words">Add Answer</span></div>
              </div>
          </div>
                ))}
          <div className="row">
            <div className="question_column_one">
              {console.log('count???', props.count)}
              {console.log('total???', props.total)}
              {(() => {
                if (props.count < props.total) {
                return (<div><span><button onClick={() => props.getQuestions(props.id, (props.count + 2), true)}>MORE ANSWERED QUESTION</button></span><span><button>ADD A QUESTION  +</button></span></div>)
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