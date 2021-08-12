export const setBodies = (payload) => ({
  type: 'SET_BODIES',
  payload,
});

export const changeFilter = (name) => ({
  type: 'CHANGE_FILTER',
  name,
});
