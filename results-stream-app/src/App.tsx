import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Simulator from './pages/simulator';


function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/simulator">
      <Simulator />
    </Route>
  </Switch>
</Router>
  );
}

export default App;
