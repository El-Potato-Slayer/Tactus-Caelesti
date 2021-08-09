// import axios from 'axios';
const planets = [];
const moons = [];
const initialState = {
  planets,
  moons,
};

// axios.get('https://api.le-systeme-solaire.net/rest/bodies')
//   .then((resp) => {
//     let arr = [];
//     arr = resp.data.bodies;
//     planets = arr.filter((body) => body.isPlanet);
//     moons = arr.filter((body) => !body.isPlanet);
//     initialState[planets] = arr.filter((body) => body.isPlanet);
//   });

const solarSystemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_BODIES':
      return { ...state, bodies: [...payload] };
    case 'SET_PLANETS':
      return { ...state, planets: [...payload] };
    case 'SET_MOONS':
      return { ...state, moons: [...payload] };
    case 'SELECTED_CATEGORY':
      return { ...state, selectedCategory: payload };
    default:
      return state;
  }
};

export default solarSystemReducer;
