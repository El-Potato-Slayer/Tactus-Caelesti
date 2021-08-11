import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import db from './firebase.config';
import BodyDetails from './components/BodyDetails';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BodyList from './containers/BodyList';
import setBodies from './store/actions';

function App() {
  const dispatch = useDispatch();
  const arr = [];
  useEffect(() => {
    db.collection('bodies').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
    }).then(() => {
      dispatch(setBodies(arr));
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/all">
          <Navbar />
          <BodyList bodyType="all" />
        </Route>
        <Route path="/all/:id">
          <Navbar />
          <BodyDetails />
        </Route>
        <Route exact path="/planets">
          <Navbar />
          <BodyList bodyType="planet" />
        </Route>
        <Route path="/planet/:id">
          <Navbar />
          <BodyDetails />
        </Route>
        <Route exact path="/blackholes">
          <Navbar />
          <BodyList bodyType="blackhole" />
        </Route>
        <Route path="/blackhole/:id">
          <Navbar />
          <BodyDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
