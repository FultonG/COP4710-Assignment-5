import React, { Component } from 'react';
import Home from './components/Home';
import Authors from './components/Authors';
import Books from './components/Books';
import BooksList from './components/BooksList';
import AuthorsList from './components/AuthorList';
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
            <Route exact path="/books" component={Books} />
            <Route path="/book/:id" component={BooksList} />
            <Route path="/author/:id" component={AuthorsList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
