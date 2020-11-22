import React from "react";
import moment from 'moment';
// import getAnswers from "../../../actions/getAnswers";

const Answers = (props) => {
  // props.getAnswers(props.id, 2, true)
  console.log('props:', props);
  console.log('props.answers:', props.answers);
  console.log('props.init:', props.init);
  console.log('pleaseplease', props.answers)
  console.log('questionID', props.question.question_id)

  
  if (props.init) {
  return (<div>
      <div><span>Q: {props.question.question_body}</span></div>

        {props.answers[props.question.question_id].map((answer) => (
          <div>
          <div><span>A:</span><span className="indiv_answers">{answer.body}</span></div>
          <div><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</span> | Helpful? <span className="btn_words">Yes</ span>  ({answer.helpfulness}) | <span className="btn_words">Report</span></div>
          <div><span>Any additional comments that will be associated with the below pictures</span></div>
          <div>{answer.photos.map((photo) => (
            <span><img src={photo.url} width="75" height="50"/></span>
            ))}
          </div>
          <div><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</ span> | Helpful?<button className="btn_words">Yes</button>({answer.helpfulness})  | <span className="btn_words">Report</span></div>
        </div> 
      ))}
      <div><button className="btn_words" onClick={() => props.getQuestions(props.id, props.count, false)}>LOAD MORE ANSWERS</button></div>
  </div>)
  } else if (!props.init){
    return (<div>
      <div><span>Q: {props.question.question_body}</span></div>

        {props.answers[props.question.question_id].map((answer) => (
          <div>
          <div><span>A:</span><span className="indiv_answers">{answer.body}</span></div>
          <div><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</span> | Helpful? <span className="btn_words">Yes</ span>  ({answer.helpfulness}) | <span className="btn_words">Report</span></div>
          <div><span>Any additional comments that will be associated with the below pictures</span></div>
          <div>{answer.photos.map((photo) => (
            <span><img src={photo.url} width="75" height="50"/></span>
            ))}
          </div>
          <div><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</ span> | Helpful?<button className="btn_words">Yes</button>({answer.helpfulness})  | <span className="btn_words">Report</span></div>
        </div> 
      ))}
      <div><button className="btn_words" onClick={() => props.getQuestions(props.id, props.count, true)}>Collapse answers</button></div>
  </div>)
  }
};



export default Answers;