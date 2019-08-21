import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '~/config';

import { Container, MovieList } from './styles';
import Loading from '../Loading';

export default function SearchResult({ items, loading, rating }) {
  function getMinMaxRating(ratingValue) {
    return {
      minRating: ratingValue === 2 ? 0 : ratingValue - 2,
      maxRating: ratingValue,
    };
  }

  let moviesResult = items;

  if (rating !== null && rating >= 0) {
    rating *= 2;
    const { minRating, maxRating } = getMinMaxRating(rating);
    moviesResult = items.filter(
      item => item.vote_average >= minRating && item.vote_average <= maxRating
    );
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <MovieList>
          {moviesResult.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`${config.image.moviePosterUrl}/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <footer>
                <strong>{movie.title}</strong>
                <em>{movie.release_date}</em>
                <div>{movie.vote_average}</div>
                <p>{movie.overview}</p>
              </footer>
              <div className="buttons">
                <Link to={`/movie/${movie.id}`}>More info</Link>
              </div>
            </li>
          ))}
        </MovieList>
      )}
    </Container>
  );
}

SearchResult.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  rating: PropTypes.number,
};

SearchResult.defaultProps = {
  rating: null,
};
