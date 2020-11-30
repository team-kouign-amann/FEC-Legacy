import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import postReview from '../../../actions/RatingsOverview/addReview.js';

class Popup extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params);
    const { productId } = props.match.params;
    this.state = {
      product_id: parseInt(productId, 10),
      rating: -1,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name);
    if (e.target.name === 'recommend') {
      this.setState({
        recommend: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  onSubmit() {
    // console.log(this.state);
    postReview(this.state);
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h2>New Review</h2>
          <label> Rating Stars </label>
          <br />
          <input
            className="rating-stars"
            type="text"
            name="rating"
            placeholder="number between 1-5"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Do you recommend this product?</label>
          <br />
          <input
            className="recommend-input"
            type="checkbox"
            name="recommend"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <div className="new-review-summary">
            <label>Review summary: </label>
            <br />
            <input
              className="new-review-input"
              type="text"
              name="summary"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="new-review-body">
            <label>Review Body:</label>
            <br />
            <textarea
              className="new-review-body-input"
              name="body"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <br />
          <div className="form-group">
            <label>What is your username ?</label>
            <br />
            <input
              className="modal-form-input"
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email">Your email :</label>
            <br />
            <input
              className="modal-form-input"
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <button
              className="form-submit-button"
              type="button"
              onClick={() => {
                // console.log('click');
                this.onSubmit();
                this.props.closePopup();
              }}
            >
              Submit
            </button>
            <br />
          </div>
          <br />
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Popup);
