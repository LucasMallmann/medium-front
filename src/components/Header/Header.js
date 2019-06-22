import React from 'react';

import { Container } from './HeaderStyle';

const Header = () => (
  <Container>
    <div>logo</div>
    <ul>
      <a href="#">
        <li>share</li>
      </a>
      <a href="">
        <li>publish</li>
      </a>
    </ul>
  </Container>
);

export default Header;
