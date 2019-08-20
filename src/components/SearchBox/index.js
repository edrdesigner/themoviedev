import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Container, SearchContainer } from './styles';

export default function SearchBox({result, searchMovie, resetMovieSearch}) {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (searchMovie && search) {
      searchMovie(search);
    }

    if (search === '' && resetMovieSearch) {
      resetMovieSearch();
    }
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
            onChange={(e) => setSearch(e.target.value)}
          />
          </form>
        </SearchContainer>
      </Container>
    </Wrapper>
  );
}


SearchBox.propTypes = {
  result: PropTypes.array,
  searchMovie: PropTypes.func,
  resetMovieSearch:  PropTypes.func
}
