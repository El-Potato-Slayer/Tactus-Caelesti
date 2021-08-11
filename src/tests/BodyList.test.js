import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import store from '../store/configureStore';
import '@testing-library/jest-dom';
import BodyList from '../containers/BodyList';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <BodyList bodyType="planets" />
      </MemoryRouter>
    </Provider>, div,
  );
});

it('renders correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <BodyList bodyType="planets" />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByTestId('list')).toHaveClass('list-container');
});

it('renders incorrectly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <BodyList bodyType="planets" />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByTestId('list')).not.toHaveClass('Uga');
});

it('renders snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <BodyList bodyType="planets" />
      </MemoryRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
