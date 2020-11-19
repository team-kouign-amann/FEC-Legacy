import React from "react";
import moment from 'moment';


const Questions = (props) => {
  
  let getAnswers = (answers) => {
    console.log('here:', answers)
    return Object.values(answers);
  }

  // let questions = props.data.results;
  {console.log('TESTING1!:', props)}
  {console.log('TESTING2!:', props.data)}
  {console.log('TESTING3!:', props.id)}
  
  return(
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
        {props.data.map((question) => (
          <div>
            <div className="question_column_one">
                    <div>
                    <div><span>Q: {question.question_body}</span></div>
                    {getAnswers(question.answers).map((answer) => (
                      <div>
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
                  </div>
            </div>
            <div className="question_column_two">
                <div>Helpful? <span className="btn_words">Yes</span> ({question.question_helpfulness}) | <span className="btn_words">Add Answer</span></div>
            </div>
          </div>
                ))}
            <div className="question_column_one">
              <div><button className="btn_words">LOAD MORE ANSWERS</button></div>
              <div><span><button onClick={() => allQuestions(props.id)}>MORE ANSWERED QUESTION</button></span><span><button>ADD A QUESTION  +</button></span></div>
            </div>
    </div>
  )
}

export default Questions;