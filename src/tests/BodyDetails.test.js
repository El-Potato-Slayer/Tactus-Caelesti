import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import store from '../store/configureStore';
import BodyDetails from '../components/BodyDetails';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/planets/1">
          <BodyDetails />
        </Route>
      </BrowserRouter>
    </Provider>, div,
  );
});

it('renders correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <BodyDetails />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByTestId('details')).toHaveClass('body-details');
});

it('renders incorrectly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <BodyDetails />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByTestId('details')).not.toHaveClass('daddy');
});

it('renders snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/planets/1">
          <BodyDetails />
        </Route>
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
