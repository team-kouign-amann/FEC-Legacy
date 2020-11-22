// var request = {
//   "product_id": "1",
//   "results": [
//       {
//           "question_id": 4,
//           "question_body": "How long does it last?",
//           "question_date": "2019-07-06T00:00:00.000Z",
//           "asker_name": "funnygirl",
//           "question_helpfulness": 11,
//           "reported": 0,
//           "answers": {
//               "65": {
//                   "id": 65,
//                   "body": "It runs small",
//                   "date": "2019-11-17T00:00:00.000Z",
//                   "answerer_name": "dschulman",
//                   "helpfulness": 8,
//                   "photos": [
//                       "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
//                       "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//                   ]
//               },
//               "89": {
//                   "id": 89,
//                   "body": "Showing no wear after a few months!",
//                   "date": "2019-09-06T00:00:00.000Z",
//                   "answerer_name": "sillyguy",
//                   "helpfulness": 17,
//                   "photos": []
//               }
//           }
//       }
//   ]
// }

// // extract the parts of question we need

// var results = request.results

// // dispatch?

// // what the state should look like
// state.questions = [{
//               "question_id": 4,
//           "question_body": "How long does it last?",
//           "question_date": "2019-07-06T00:00:00.000Z",
//           "asker_name": "funnygirl",
//           "question_helpfulness": 11,
//           "reported": 0,
// }]

// if (action.type === 'QUESTION') {
//   return copy state and add new item.
// }

// return {...state, first: action.payload}

// {type: 'NEW-QUESTION', payload: {question object}}

// {results[0].question_id}

// actionCreator = (question_id, question_body, question_date, question_helpfulness, reported) {
//   return {
//       type: 'NEW-QUESTION',
//       payload: {question_id = question ...}
//   }
// }

// // Answers
// {
//   "4": [ {
//                   "id": 65,
//                   "body": "It runs small",
//                   "date": "2019-11-17T00:00:00.000Z",
//                   "answerer_name": "dschulman",
//                   "helpfulness": 8,
//                   "photos": [
//                       "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
//                       "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//                   ]
//               },
//                   "id": 89,
//                   "body": "Showing no wear after a few months!",
//                   "date": "2019-09-06T00:00:00.000Z",
//                   "answerer_name": "sillyguy",
//                   "helpfulness": 17,
//                   "photos": []
//               }
//               ]
// }

// //

// // Answers from query?

// dispatch(answerActionCreator(results[0].question_id, Object.values(results[0].answers)))

// // answer action creator
// answerActionCreator = (question_id, answerArray) {
//   return {
//       type: 'NEW-ANSWERS',
//       payload: {question_id: answerArray}
//   }
// }

// // asnwer reducer

// return {...state, payload.}

// for answer in state.answer[question_id]

// const answerArray = state.answer[props.question_id]
