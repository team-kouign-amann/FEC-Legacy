import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';
import Product from '../containers/ProductContainer.js';
import Questions from '../containers/QuestionsContainer.js';
import Ratings from '../containers/RatingsContainer.js';
import Related from '../containers/RelatedContainer.js';

describe('App', () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  test('App contains `Hello World!`', () => {
    console.log(appWrapper.debug());
    expect(appWrapper.contains('Hello World!')).toBe(true);
  });

  test('renders Product Container', () => {
    const questions = appWrapper.find(Product);
    expect(questions).toHaveLength(1);
  });

  test('renders Questions Container', () => {
    const questions = appWrapper.find(Ratings);
    expect(questions).toHaveLength(1);
  });

  test('renders Ratings Container', () => {
    const questions = appWrapper.find(Related);
    expect(questions).toHaveLength(1);
  });
  test('renders Related Container', () => {
    const questions = appWrapper.find(Questions);
    expect(questions).toHaveLength(1);
  });
});
