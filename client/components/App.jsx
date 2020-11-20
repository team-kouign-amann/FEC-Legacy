import React from 'react';
import RelatedContainer from '../containers/RelatedContainer.js';
import QuestionsContainer from '../containers/QuestionsContainer.js';
import RatingsContainer from '../containers/RatingsContainer.js';
import ProductContainer from '../containers/ProductContainer.js';

const App = () => (
  <div>
    <ProductContainer />
    <RelatedContainer />
    <QuestionsContainer />
    <RatingsContainer />
  </div>

);

export default App;
