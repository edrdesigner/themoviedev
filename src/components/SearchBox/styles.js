import styled from 'styled-components';
import SearchIcon from '~/assets/images/search.svg';

export const Wrapper = styled.div`
  background: #fff;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
    width: 100%;
  }
`
