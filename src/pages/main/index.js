import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formatDateUtil from '~/util/formatDate';
import DiscoverMovies from '~/components/DiscoverMovies';
import SearchResultMovies from '~/components/SearchResult';
import SearchBox from '~/components/SearchBox';
import { Container } from './styles';
import { Creators as MoviesDiscoverActions } from '~/store/ducks/moviesDiscover';

export default function Main() {
  const [ratingValue, setRatingValue] = useState(null);

  const newMovies = useSelector(state => {
    let result = [];
    if (state.moviesDiscover.data.results) {
      result = state.moviesDiscover.data.results.map(item => ({
        ...item,
        release_date: formatDateUtil(item.release_date),
      }));
    }

    return {
      ...state.moviesDiscover,
      result,
    };
  });

  const searchResult = useSelector(state => {
    let result = [];
    if (state.movieSearch.data.results) {
      result = state.movieSearch.data.results.map(item => ({
        ...item,
        release_date: formatDateUtil(item.release_date),
      }));
    }

    return {
      ...state.movieSearch,
      result,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    function fetchMovies() {
      dispatch(MoviesDiscoverActions.getMoviesDiscoverRequest());
    }

    fetchMovies();
  }, [dispatch]);

  function handleRatingSearch(value) {
    if (ratingValue !== value) {
      setRatingValue(value);
    }
  }

  function renderMain() {
    if (searchResult && searchResult.searching) {
      return (
        <SearchResultMovies
          items={searchResult.result}
          loading={searchResult.loading}
          rating={ratingValue}
        />
      );
    }

    return (
      <DiscoverMovies items={newMovies.result} loading={newMovies.loading} />
    );
  }

  return (
    <Container>
      <SearchBox
        onSearchByRating={handleRatingSearch}
        rating={ratingValue}
        searching={searchResult.searching}
      />
      {renderMain()}
    </Container>
  );
}
