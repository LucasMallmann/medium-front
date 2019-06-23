import React, { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';

import Routes from './routes';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}

export default App;
