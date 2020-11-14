import React from 'react'
import {shallow} from 'enzyme';

import App from './App.jsx';

test('App contains `Hello World!`', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(wrapper.contains('Hello World!')).toBe(true);
})