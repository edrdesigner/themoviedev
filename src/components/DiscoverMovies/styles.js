import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 30px;

  li {
    display: flex;
    flex-direction: column;
  }

  li img {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }

  li footer {
    flex: 1;
    background: #FFF;
    border: 1px solid #eee;
    padding: 15px 20px;
    text-align: left;

  }

  li footer strong {
    font-size: 16px;
    color: #333;
  }

  li footer > div {
    font-size: 12px;
    color: ${colors.secondary};
    font-weight: bold;
  }

  li footer p {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    margin-top: 5px;
  }

  li footer em {
    display: block;
    font-size: 12px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
  }

  li .buttons {
    margin-top: 5px;
    display: flex;
    height: 30px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0, 0.05);
    background: #FFF;
    align-items: center;
    justify-content: center;
    background: ${colors.primary}

    a {
      cursor: pointer;
      font-size: 14px;
      text-decoration: none;
      color: #FFF;
      font-weight: bold;
    }
  }
`;
