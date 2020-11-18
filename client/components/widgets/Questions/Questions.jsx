import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';

const Questions = () => (
  <div className="row">
    <div>
      <h3>QUESTIONS &amp; ANSWERS</h3>
    </div>
    <div>
      <div className="search">
        <input type="text" className="searchTerm" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <button type="submit" className="searchButton">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
    <div>
      <div className="question_column_one">
        <div><span>Q: This a filler question where we will map props?</span></div>
        <div>
          <span>A:</span>
          <span className="indiv_answers">This is a filler answer that we will also map over the props and return the exact repsonse.</span>
        </div>
        <div>
          <span>by (User), (Date)</span>
          {' '}
          | Helpful?
          {' '}
          <span className="btn_words">Yes</span>
          (Count) |
          {' '}
          <span className="btn_words">Report</span>
        </div>
      </div>
      <div className="question_column_two">
        <div>
          Helpful?
          <span className="btn_words">Yes</span>
          {' '}
          (count) |
          <span className="btn_words">Add Answer</span>
        </div>
      </div>
    </div>
    <div>
      <div className="question_column_one">
        <div><span>Q: This a filler question where we will map props?</span></div>
        <div>
          <span>A:</span>
          <span className="indiv_answers">This is a filler answer that we will also map over the props and return the exact repsonse.</span>
        </div>
        <div>
          <span>by (User), (Date)</span>
          {' '}
          | Helpful?
          {' '}
          <span className="btn_words">Yes</span>
          (Count) |
          {' '}
          <span className="btn_words">Report</span>
        </div>
      </div>
      <div className="question_column_two">
        <div>
          Helpful?
          <span className="btn_words">Yes</span>
          {' '}
          (count) |
          <span className="btn_words">Add Answer</span>
        </div>
      </div>
    </div>
    <div>
      <div className="question_column_one">
        <span>
          <div><span>Q: This is a filler question where we will map props?</span></div>
          <div>
            <span>A:</span>
            <span className="indiv_answers">This is a filler answer that we will also map over the props and return the exact repsonse.</span>
          </div>
          <div>
            <span>by (User), (Date)</span>
            {' '}
            | Helpful?
            {' '}
            <span className="btn_words">Yes</span>
            (Count) |
            {' '}
            <span className="btn_words">Report</span>
          </div>
          <div><span>Any additional comments that will be associated with the below pictures</span></div>
          <div>
            <span><img src="http://placecorgi.com/100" /></span>
            <span><img src="http://placecorgi.com/100" /></span>
            <span><img src="http://placecorgi.com/100" /></span>
          </div>
          <div>
            <span>by (User), (Date)</span>
            {' '}
            | Helpful?
            <button className="btn_words">Yes</button>
            (Count)  |
            {' '}
            <span className="btn_words">Report</span>
          </div>
          <div><button className="btn_words">LOAD MORE ANSWERS</button></div>
          <div>
            <span><button>MORE ANSWERED QUESTION</button></span>
            <span><button>ADD A QUESTION  +</button></span>
          </div>
        </span>
      </div>
      <div className="question_column_two">
        <div>
          Helpful?
          <span className="btn_words">Yes</span>
          {' '}
          (count) |
          <span className="btn_words">Add Answer</span>
        </div>
      </div>
    </div>
  </div>
);

export default Questions;
