import React from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <div className="container mt-5">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <CalculatorPage />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </div>
  </>
);

export default App;
