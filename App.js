import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Data from './components/Data';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/data" component={Data} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
