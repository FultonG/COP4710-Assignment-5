import React, { Component } from 'react';
import Home from './components/Home';
import Authors from './components/Authors';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/authors" component={Authors} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
