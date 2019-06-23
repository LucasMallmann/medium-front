import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header as StyledHeader } from './HeaderStyle';

const Header = () => (
  <StyledHeader>
    <Container>
      <Link to="/">
        <img src="http://logok.org/wp-content/uploads/2015/10/Medium-logo-2015.png" alt="medium" />
      </Link>
      <ul>
        <Link to="/share">
          <li>share</li>
        </Link>
        <Link to="/publish">
          <li>publish</li>
        </Link>
      </ul>
    </Container>
  </StyledHeader>
);

export default Header;
