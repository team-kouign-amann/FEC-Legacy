import React, {useEffect} from "react";
// import getQuestions from '../../../actions/questionsOverview/getQuestions.js'
import Answers from './Answers.jsx';
import { useParams, useLocation } from 'react-router-dom';
import $ from 'jquery';
import 'core-js';
import 'regenerator-runtime';



const Questions = (props) => {
  const { productId } = useParams();
  {console.log('productId:', productId)}
  const location = useLocation();
  {console.log('location:', location)}


  $('form').on('submit', function( event ) {
    event.preventDefault();
    event.stopImmediatePropagation();
    let params = { body: document.getElementById("body").value, 
                  name: document.getElementById("name").value, 
                  email: document.getElementById("email").value, 
                  product_id: Number(document.getElementById("product_id").value) 
                  }
    console.log(params);
    return props.addQuestions(params)
    .then(() => {
      window.location.href = location.pathname
      document.getElementById("body").value = ''; 
      document.getElementById("name").value = '';
      document.getElementById("email").value = '';
    })
    .catch((err) => {
      console.log('Error submitting', err)
    })
  });

  useEffect(async () => {
    console.log('hit')
    await props.getQuestions(productId)
    .catch((err) => {
      console.log('Error getting initial questions', err)
    })
  }, [])
  
  {console.log('props.questions:', props.questions)}
  {console.log('props.answerBoolean:', props.answerBoolean)}
  {console.log('props.id:', props.id)}
    
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
              <Answers question={question} answerBoolean={props.answerBoolean} moreAnswers={props.moreAnswers} answerHelpful={(answerId) => props.answerHelpful(answerId, props.votedAnswer, props.id)}/>
            </div>
              <div className="question_column_two">
                  <div>Helpful? <span className="btn_words" onClick={() => props.questionHelpful(question.question_id, props.votedAlready, props.id)}>Yes</span> ({question.question_helpfulness}) | <span className="btn_words">Add Answer</span></div>
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
              <span><a href="#openModal-about">ADD A QUESTION  +</a></span>
              <div id="openModal-about" class="modalDialog">
                <div>
                  <a href="#close" title="Close" class="close">X</a>
                  <h2>Ask Your Question</h2>
                  <h3>About the (Product Name)</h3>
                    <form>
                      <label for="body">* Your Question:</label><br />
                      <input type="text" maxlength="1000" id="body" size="100"></input><br />
                      <label for="name">* What is your nickname</label><br />
                      <input type="text" maxlength="60" id="name" size="60" placeholder="Example: jackson11!"></input>
                      <p>For privacy reasons, do not use your full name or email address</p>
                      <label for="email">* Your email</label><br />
                      <input type="text" maxlength="60" id="email" size="60" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  placeholder="Why did you like the product or not?"></input>
                      <p>For authentication reasons, you will not be emailed</p>
                      <input type="number" id="product_id" value={props.id} style={{display: 'none'}}></input>
                      <input type="submit" value="Submit question" onsubmit="return false"></input>
                    </form>
                </div>
              </div>
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