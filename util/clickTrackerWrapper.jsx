import React from 'react';
import clickTracker from './clickTracker.js';

const withClickTracker = (Component, widget) => (
  (props) => {
    const handleClickTracker = (e) => {
      const date = new Date();
      clickTracker(e.target.outerHTML, widget, date.toString());
    };
    return (
      <div onClick={(e) => { handleClickTracker(e)}}>
        <Component {...props} />
      </div>
    );
  }
);

export default withClickTracker;
