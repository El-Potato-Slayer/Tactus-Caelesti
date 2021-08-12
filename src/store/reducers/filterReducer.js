const initialState = {
  name: '',
};

const filterReducer = (state = initialState, { type, name }) => {
  switch (type) {
    case 'CHANGE_FILTER':
      return { ...state, name };
    default:
      return state;
  }
};

export default filterReducer;
