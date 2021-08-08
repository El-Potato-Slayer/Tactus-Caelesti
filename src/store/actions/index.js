// import PropTypes from 'prop-types';

export const setPlanets = (payload) => ({
  type: 'SET_PLANETS',
  payload,
});

export const setMoons = (payload) => ({
  type: 'SET_MOONS',
  payload,
});

export const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  category,
});

// createBook.propTypes = {
//   book: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     category: PropTypes.string,
//   }),
// };

// createBook.defaultProps = {
//   book: {},
// };

// removeBook.propTypes = {
//   book: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     category: PropTypes.string,
//   }),
// };

// removeBook.defaultProps = {
//   book: {},
// };
