import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import App from './App';
import Home from './Home';
import Login from './Login';
import './index.css';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="login" path="/login" handler={Login} />
  </Route>
);

Router.run(routes, function(Handler) {
  ReactDOM.render(
    <Handler />,
    document.getElementById('root')
  );
});
