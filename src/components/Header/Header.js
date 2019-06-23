import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header as StyledHeader } from './HeaderStyle';

const Header = () => (
  <StyledHeader>
    <Container>
      <div>logo</div>
      <ul>
        <Link to="/share">
          <li>share</li>
        </Link>
        <Link to="publish">
          <li>publish</li>
        </Link>
      </ul>
    </Container>
  </StyledHeader>
);

export default Header;
