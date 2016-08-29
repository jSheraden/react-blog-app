import React, { Component } from 'react';
import { Link, RouteHandler } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-nav">
          <Link to="home">Home</Link>&nbsp;|&nbsp;
          <Link to="login">Login</Link>
        </p>
        <RouteHandler />
      </div>
    );
  }
}

export default App;
