import React from "react";
import moment from 'moment';
import ModalImage from "react-modal-image";

const Answers = (props) => {
  // console.log('props.question:', props.question);
  
  
  let answers = Object.values(props.question.answers)

  console.log('answers', answers);
  
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
  // console.log('seller', sellerFirst)
  
  console.log('underReviewAnswers', props.underReview);
  
  let renderedAnswers;

  let keyId = props.question.question_id;

  // console.log("ID", props.answerBoolean[keyId])
  for (let i = 0; i < props.underReview.length; i++) {
    for (let key in props.underReview[i]) {
      if (key === keyId) {
        sellerFirst.push(props.underReview[i][key])
      }
    }
  }
  console.log('lololol', sellerFirst)
  
  if (props.answerBoolean[keyId]) {
    renderedAnswers = sellerFirst.slice(0, 2);
  } else {
    renderedAnswers = sellerFirst;
  }


  return (<div>
    <div className="full-answer">A:</div><div className="answers-container itemconfiguration">
          {renderedAnswers.map((answer) => (
            <div key={answer.id.toString()}>
            <div className="indiv_answers">{answer.body}</div>
            <div className="indiv_answers">{answer.photos.map((photo) => (
              <ModalImage small={photo} medium={photo} className="thumbnail"/>
              ))}
            </div>
            {(() => {if (!answer.reported) {
              return answer.answerer_name === 'Seller' 
              ? <div className="indiv_answers body-font"><span>by <b>{answer.answerer_name}</b>, {moment(answer.date).format('MMMM Do, YYYY')}</span> | Helpful? <span className="btn_words under-line body-font" onClick={() => props.answerHelpful(answer.id)}>Yes</ span>  ({answer.helpfulness}) | <span className="btn_words under-line body-font rep-answer" onClick={() => props.reportAnswer(answer.id, answer, keyId)}>Report</span></div> 
              : <div className="indiv_answers body-font"><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</span> | Helpful? <span className="btn_words under-line body-font" onClick={() => props.answerHelpful(answer.id)}>Yes</ span>  ({answer.helpfulness}) | <span className="btn_words under-line body-font rep-answer" onClick={() => props.reportAnswer(answer.id, answer, keyId)}>Report</span></div>
            } else {
              return <div className="indiv_answers body-font"><span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}</span><span className="btn_words under-line body-font">Reported</span></div>
            }
            })()}
          </div> 
        ))}
      {(() => {if (answers.length <= 2) {
        return null;
      } else if (renderedAnswers.length < answers.length) {
        return <div className="indiv_answers"><button className="btn_words" onClick={() => props.moreAnswers(props.answerBoolean, props.question.question_id)}>LOAD MORE ANSWERS</button></div>
      } else {
        return <div className="indiv_answers"><button className="btn_words" onClick={() => props.moreAnswers(props.answerBoolean, props.question.question_id)}>Collapse ANSWERS</button></div>
      }
      })()} 
    </div>
  </div>
  )};



export default Answers;




// width="75" height="50"