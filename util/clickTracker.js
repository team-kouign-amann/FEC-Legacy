import axios from 'axios';

const clickTracker = (element, widget, time) => (
  axios.post('http://3.21.164.220/interactions', {
    element,
    widget,
    time,
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('Error in clickTracker! Error: ', err);
  })
);

export default clickTracker;
