import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './style';

const Title = ({ children }) => (
  <Container>
    <Content>
      <h1>{children}</h1>
    </Content>
  </Container>
);

export default Title;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
