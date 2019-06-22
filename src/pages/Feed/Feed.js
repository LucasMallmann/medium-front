/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';

class Feed extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Feed</h1>
      </Fragment>
    );
  }
}

export default Feed;
