import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Creators as MovieSearchActions } from '~/store/ducks/movieSearch';
import { Wrapper, Container, SearchContainer, StartSearch } from './styles';

export default function SearchBox({ result }) {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (search && search !== null) {
      dispatch(MovieSearchActions.getMovieSearchRequest(search));
    } else {
      dispatch(MovieSearchActions.getMovieSearchReset());
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setSearch('');
    dispatch(MovieSearchActions.getMovieSearchReset());
  }

  function renderStarSearch() {
    if (result && result.length > 0) {
      return <StartSearch>Star search</StartSearch>;
    }

    return null;
  }

  return (
    <Wrapper>
      <Container>
        <SearchContainer>
          <form id="form" onSubmit={handleSubmit}>
            <input
              id="search-input"
              type="text"
              value={search}
              placeholder="Search a movie"
              onChange={e => setSearch(e.target.value)}
            />
            <button
              className="button-reset"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="button-confirm"
              type="button"
              onClick={handleSubmit}
            >
              Search
            </button>
            {renderStarSearch()}
          </form>
        </SearchContainer>
      </Container>
    </Wrapper>
  );
}

SearchBox.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object).isRequired,
};
