import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import DiscoverMovies from '~/components/DiscoverMovies';
import SearchBox from '~/components/SearchBox';
import { Container } from './styles';
import { Creators as MoviesDiscoverActions } from '~/store/ducks/moviesDiscover';

export default function Main({ searchResult }) {
  const newMovies = useSelector(state => state.moviesDiscover);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDiscovery = () => {
      return dispatch(MoviesDiscoverActions.getMoviesDiscoverRequest());
    };
    getDiscovery();
  }, [dispatch]);

  function renderMovies() {
    if (searchResult) {
      return <div>Search result</div>;
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

Main.propTypes = {
  searchResult: PropTypes.array,
  error: PropTypes.object,
};
