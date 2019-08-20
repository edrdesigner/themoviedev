import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import DiscoverMovies from '~/components/DiscoverMovies'
import SearchBox from '~/components/SearchBox'
import { Container } from './styles';
import { Creators as MoviesDiscoverActions } from '~/store/ducks/moviesDiscover';

export default function Main({searchResult}) {
  const newMovies = useSelector(state => state.moviesDiscover);
  const dispatch = useDispatch();

  useEffect(() => {
    function getDiscovery() {
      return handleMoviesDiscoverRequest();
    }
    getDiscovery();
  }, []);

  function handleMoviesDiscoverRequest() {
    return dispatch(MoviesDiscoverActions.getMoviesDiscoverRequest());
  }

  function renderMovies() {
    if (searchResult) {
      return (
        <div>
          Search result;
        </div>
      )
    }

    return (
      <DiscoverMovies items={newMovies.data && newMovies.data.results || []} loading={newMovies.loading} />
    )
  }

  return (
    <Container>
      <SearchBox result={searchResult} />
      {renderMovies()}
    </Container>
  );
}

Main.propTypes = {
  getFeaturedMovies: PropTypes.func,
  newMovies: PropTypes.shape({
    data: PropTypes.object,
    loading: PropTypes.bool,
  }),
  searchResult: PropTypes.array,
  error: PropTypes.object
};

