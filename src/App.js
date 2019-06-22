import React, { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Feed />
    </Fragment>
  );
}

export default App;
