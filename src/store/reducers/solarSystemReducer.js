const planets = [];
const moons = [];
const initialState = {
  planets,
  moons,
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
