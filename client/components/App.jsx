import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RelatedContainer from '../containers/RelatedContainer.js';
import QuestionsContainer from '../containers/QuestionsContainer.js';
import RatingsContainer from '../containers/RatingsContainer.js';
import ProductContainer from '../containers/ProductContainer.js';

const App = () => (
  <Router>
    <div>
      <Route path={"/:productId"}>

        <ProductContainer />

        <RelatedContainer />

        <QuestionsContainer />

        <RatingsContainer />
      </Route>
    </div>
  </Router>

);

export default App;
