import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  background-color: ${colors.black};
`;

export const Content = styled.div`
  min-width: 1110px;
  margin: 0 auto;
  padding: 15px 0;

  h1 {
    padding: 0;
    margin: 0;
    font-size: 25px;
    color: ${colors.white};
  }
`;
