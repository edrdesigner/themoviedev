import React from 'react';
import PropTypes from 'prop-types';
import config from '~/config'
import { Link } from 'react-router-dom';

import { Container, MovieList } from './styles';
import Loading from '../Loading';

export default function DiscoverMovies({ items, loading }) {
  return (
    <Container>
      {loading
      ? (<Loading />)
      : (
        <MovieList>
          {items.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`${config.image.moviePosterUrl}/${movie.poster_path}`} alt={movie.title}/>
              </Link>
              <footer>
                <strong>{movie.title}</strong>
                <em>{movie.release_date}</em>
                <div>
                  {movie.vote_average}
                </div>
                <p>{movie.overview}</p>
              </footer>
              <div className="buttons">
                <Link to={`/movie/${movie.id}`}>
                  More info
                </Link>
              </div>
            </li>
          ))}
        </MovieList>
      )}
    </Container>
  );
}

DiscoverMovies.propTypes = {
  items: PropTypes.array,
}
