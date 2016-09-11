import React, { Component } from 'react';
import { Link, RouteHandler } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <p className="Main-nav">
          <Link to="main">Home</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="newPost">New Post</Link>
        </p>
        <RouteHandler />
      </div>
    );
  }
}

export default Main;
