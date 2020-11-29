import React, { Component } from 'react';
import Popup from './addReviewBox.jsx';
import store from '../../../store/store.js';
import getReview from '../../../actions/RatingsOverview/getReviews.js';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div className="popup-form">

        <button onClick={this.togglePopup.bind(this)}>ADD A REVIEW</button>
        <button type='button' onClick={() => { store.dispatch(getReview(3, 'relevant', 100)); }}>MORE REVIEWS</button>

        {this.state.showPopup
          ? (
            <Popup
              text="Close Me"
              closePopup={this.togglePopup.bind(this)}
            />
          )
          : null}
      </div>
    );
  }
}

// const AddReview = ({ showReviews, metaRatings }) => {
//   const handleNewReview = (product_id, newReviewInfo) => {};

//   function showForm() {
//     document.querySelector('html').classList.toggle('scroll-lock');
//   }

//   return (
//     <div className="popup-form">
//       <button type="button" className="add-a-review" onClick={showForm}>ADD A REVIEW</button>
//       <AddReviewForm
//         showReviews={showReviews}
//         metaRatings={metaRatings}
//         handleNewReview={handleNewReview}
//       />
//     </div>

//   );
// };

export default AddReview;
