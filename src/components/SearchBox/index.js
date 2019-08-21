import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { useDispatch } from 'react-redux';
import { Creators as MovieSearchActions } from '~/store/ducks/movieSearch';
import { Wrapper, Container, SearchContainer, StartSearch } from './styles';

export default function SearchBox({ searching, onSearchByRating, rating }) {
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

  function handleSearchByRating(value) {
    if (onSearchByRating) {
      onSearchByRating(value);
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setSearch('');
    onSearchByRating(null);
    dispatch(MovieSearchActions.getMovieSearchReset());
  }

  function handleRatingClick(value) {
    if (value === rating) {
      onSearchByRating(null);
    }
  }

  function renderStarSearch() {
    if (searching) {
      return (
        <StartSearch>
          <Rating
            onChange={handleSearchByRating}
            onClick={handleRatingClick}
            initialRating={rating}
          />
        </StartSearch>
      );
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
  searching: PropTypes.bool.isRequired,
  onSearchByRating: PropTypes.func.isRequired,
  rating: PropTypes.number,
};

SearchBox.defaultProps = {
  rating: null,
};
