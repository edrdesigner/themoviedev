import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DiscoverMovies from '~/components/DiscoverMovies';
import SearchBox from '~/components/SearchBox';
import { Container } from './styles';
import { Creators as MoviesDiscoverActions } from '~/store/ducks/moviesDiscover';

export default function Main() {
  const newMovies = useSelector(state => state.moviesDiscover);
  const searchResult = useSelector(state => {
    if (state.movieSearch && state.movieSearch.data.results) {
      return state.movieSearch.data.results;
    }
    return [];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MoviesDiscoverActions.getMoviesDiscoverRequest());
  }, [dispatch]);

  function renderMovies() {
    if (searchResult && searchResult.length > 0) {
      return <DiscoverMovies items={searchResult || []} />;
    }

    return (
      <DiscoverMovies
        items={newMovies.data.results || []}
        loading={newMovies.loading}
      />
    );
  }

  return (
    <Container>
      <SearchBox result={searchResult} />
      {renderMovies()}
    </Container>
  );
}
