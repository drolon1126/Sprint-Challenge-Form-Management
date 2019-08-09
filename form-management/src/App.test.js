import React from 'react';
import * as dtl from '@testing-library/dom'
import { withRouter } from 'react-router'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react'
import DataDisp from './Components/DataDisp';
import App from './App';
import Login from './Components/Login';

afterEach(cleanup)

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
};

test('full app rendering/navigating', () => {
  const { container, getByText } = renderWithRouter(<App />)
  expect(container.innerHTML).toMatch('Home')
  const leftClick = { button: 0 }
  fireEvent.click(getByText(/Login/i), leftClick)
  expect(container.innerHTML).toMatch('Username:')
})

test('rendering a component that uses withRouter', () => {
  const route = '/'
  const { getByTestId } = renderWithRouter(<DataDisp list={[{"name":"Brisket","course":"Main","technique":"Sous-Vide","ingredients":["Smoked Salt","Prague Powder No. 1","Liquid Aminos","Chipotle Powder","Molassas"]}]}/>, { route })
  expect(getByTestId('food0').textContent).toMatch(/Brisket/)
})