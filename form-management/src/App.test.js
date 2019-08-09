import React from 'react';
import * as rtl from '@testing-library/react';
import * as dtl from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);

  wrapper.getByText(/Ingredients/);
  wrapper.getByText(/home/);
  wrapper.getByText(/login/);
});
