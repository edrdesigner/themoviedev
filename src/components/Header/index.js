import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderCotainer } from './styles';
import logo from '~/assets/images/logo.svg';

const Header = () => (
  <Container>
    <HeaderCotainer>
      <Link to="/">
        <img src={logo} alt="the movie dev" />
      </Link>
    </HeaderCotainer>
  </Container>
);

export default Header;
