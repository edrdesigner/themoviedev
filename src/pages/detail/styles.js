import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
`;

export const PosterBackground = styled.div`
  display: flex;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: top;
  width: 960px;
`;

export const MovieData = styled.div`
  display: flex;
  flex-grow: 1;

  img {
    max-width: 450px;
    margin-right: 20px;
  }
`;

export const MovieDetails = styled.div`
  text-align: left;

  h2 {
    font-size: 18px;
    color: ${colors.primary};
    margin-bottom: 5px;
  }

  strong {
    font-size: 14px;
    color: ${colors.secondary};
    margin-bottom: 15px;
    display: block;
  }

  ul {
    list-style: none;
    li {
      font-size: 14px;
      color: ${colors.dark};
    }
  }

  p {
    font-size: 14px;
    color: ${colors.dark};
    padding-top: 20px;
    line-height: 20px;
  }
`;
