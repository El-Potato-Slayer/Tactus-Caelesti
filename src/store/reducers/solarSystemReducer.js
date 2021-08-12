const initialState = {
  bodies: [],
};

const solarSystemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_BODIES':
      return { ...state, bodies: [...payload] };
    default:
      return state;
  }
};

export default solarSystemReducer;
