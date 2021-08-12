import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import store from '../store/configureStore';
import '@testing-library/jest-dom';
import Home from '../components/Home';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>, div,
  );
});

it('renders correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByTestId('home-header')).toHaveTextContent('Tactus');
});

it('renders incorrectly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByTestId('home-header')).not.toHaveClass('Thanos');
});

it('renders snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
