import styled from 'styled-components';
import SearchIcon from '~/assets/images/search.svg';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  background: #fff;
`;

export const Container = styled.div`
  max-width: 970px;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 40px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  form {
    flex-grow: 1;
    align-items: center;
    display: flex;
  }

  input {
    flex: 1;
    flex-grow: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
  }

  button.button-reset {
    border: 0;
    color: ${colors.dark};
    padding: 5px 15px;
    background: none;
    cursor: pointer;
  }

  button.button-confirm {
    border: 0;
    border-radius: 4px;
    color: ${colors.white};
    background: ${colors.primary};
    padding: 5px 15px;
    cursor: pointer;
  }
`;

export const StartSearch = styled.div`
  font-size: 12px;
  color: ${colors.dark};
  padding-left: 10px;
`;
