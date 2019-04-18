import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
