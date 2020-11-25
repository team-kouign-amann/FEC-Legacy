import React from "react";
import moment from 'moment';

const Answers = (props) => {
  console.log('props.question:', props.question);
  console.log('props.answers:', props.answers);
  // let answers;
  
  if (!props.answers[props.question.question_id]) {
      props.moreAnswers(props.allAnswers, props.questions, false, props.question.question_id, true)
  }

 console.log('Before', props.answers, props.question.question_id)
  
  return (<div>
        {props.answers[props.question.question_id].map((answer) => (
          <div className="itemconfiguration">
          <div><span>A:</span><span className="indiv_answers">{answer.body}</span></div>
          <div><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</span> | Helpful? <span className="btn_words">Yes</ span>  ({answer.helpfulness}) | <span className="btn_words">Report</span></div>
          <div><span>Any additional comments that will be associated with the below pictures</span></div>
          <div>{answer.photos.map((photo) => (
            <span><img src={photo} width="75" height="50"/></span>
            ))}
          </div>
          <div><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</ span> | Helpful?<button className="btn_words">Yes</button>({answer.helpfulness})  | <span className="btn_words">Report</span></div>
        </div> 
      ))}
      {console.log('equality', props.answers[props.question.question_id].length, props.allAnswers[props.question.question_id].length)}
    {(() => {if (props.allAnswers[props.question.question_id].length <= 2) {
      return null;
    } else if (props.answers[props.question.question_id].length < props.allAnswers[props.question.question_id].length) {
      return <div><button className="btn_words" onClick={() => props.moreAnswers(props.allAnswers, props.questions, false, props.question.question_id, false)}>LOAD MORE ANSWERS</button></div>
    } else {
      return <div><button className="btn_words" onClick={() => props.moreAnswers(props.allAnswers, props.questions, false, props.question.question_id, true)}>Collapse ANSWERS</button></div>
    }
    })()} 
  </div>
  )};



export default Answers;