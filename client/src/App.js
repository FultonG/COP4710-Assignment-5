import React, { Component } from 'react';
import Home from './components/Home';
import Authors from './components/Authors';
import Books from './components/Books';
import NewBookForm from './components/NewBookForm';
import BooksList from './components/BooksList';
import AuthorsList from './components/AuthorList';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">Henry Books</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/authors">Authors</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
          </Nav>
        </Navbar>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/books" component={Books} />
            <Route path="/book/:id" component={BooksList} />
            <Route path="/author/:id" component={AuthorsList} />
            <Route path="/newBook" component={NewBookForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
