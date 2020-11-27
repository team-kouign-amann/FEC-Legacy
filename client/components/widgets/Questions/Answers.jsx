import React from "react";
import moment from 'moment';

const Answers = (props) => {
  console.log('props.question:', props.question);
  console.log('props.answerBoolean:', props.answerBoolean);

  let answers = Object.values(props.question.answers)
  
  answers.sort((a, b) => {
    return b.helpfulness - a.helpfulness
  })
  
  let sellerFirst = [];
  answers.forEach((answer) => {
    if (answer.answerer_name === 'Seller') {
      sellerFirst.unshift(answer);
    } else {
      sellerFirst.push(answer);
    }
  })
  
  console.log('Afteranswers', sellerFirst);
  
  let renderedAnswers;

  let key = props.question.question_id;

  console.log("ID", props.answerBoolean[key])
  
  if (props.answerBoolean[key]) {
    renderedAnswers = answers.slice(0, 2);
  } else {
    renderedAnswers = answers;
  }

  console.log('lololol', renderedAnswers)

  
  return (<div><span>A:</span><div>
        {renderedAnswers.map((answer) => (
          <div className="itemconfiguration">
          <div><span className="indiv_answers">{answer.body}</span></div>
          <div>{answer.photos.map((photo) => (
            <span><img src={photo} width="75" height="50"/></span>
            ))}
          </div>
          {(() => {if (answer.answerer_name === 'Seller') {
            return <div><span>by <b>{answer.answerer_name}</b>, {moment(answer.date).format('MMMM Do, YYYY')}</span> | Helpful? <span className="btn_words" onClick={() => props.answerHelpful(answer.id)}>Yes</ span>  ({answer.helpfulness}) | <span className="btn_words">Report</span> | <span className="btn_words">Add Answer</span></div>
          } else {
            return <div><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</span> | Helpful? <span className="btn_words" onClick={() => props.answerHelpful(answer.id)}>Yes</ span>  ({answer.helpfulness}) | <span className="btn_words">Report</span> | <span className="btn_words">Add Answer</span></div>
          }})()}
        </div> 
      ))}
    {(() => {if (answers.length <= 2) {
      return null;
    } else if (renderedAnswers.length < answers.length) {
      return <div><button className="btn_words" onClick={() => props.moreAnswers(props.answerBoolean, props.question.question_id)}>LOAD MORE ANSWERS</button></div>
    } else {
      return <div><button className="btn_words" onClick={() => props.moreAnswers(props.answerBoolean, props.question.question_id)}>Collapse ANSWERS</button></div>
    }
    })()} 
  </div></div>
  )};



export default Answers;