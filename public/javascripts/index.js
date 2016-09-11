import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import Main from './Main';
import NewPost from './NewPost';

let routes = (
  <Route name="main" path="/" handler={Main}>
    <Route name="newPost" path="/post/new" handler={NewPost} />
  </Route>
);

Router.run(routes, (Handler) => {
  ReactDOM.render(
    <Handler />,
    document.getElementById('root')
  );
});
