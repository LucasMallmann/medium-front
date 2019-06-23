/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Feed from './pages/Feed/Feed';
import Post from './pages/Post/Post';
import Publish from './pages/Publish/Publish';
import Header from './components/Header/Header';

const Routes = () => (
  <Fragment>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/share" component={() => <h1>Share</h1>} />
        <Route path="/publish" component={Publish} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
