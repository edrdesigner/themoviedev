import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import config from '~/config';
import formatDateUtil from '~/util/formatDate';
import MovieResource from '~/resources/MovieResource';
import Loading from '~/components/Loading';
import { Container, PosterBackground, MovieData, MovieDetails } from './styles';

export default function Detail({ match }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetail(id) {
      try {
        setLoading(true);
        const { data } = await MovieResource.getDetails(id);
        setMovie(data);
      } catch (error) {
        window.console.warn(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetail(match.params.id);
  }, [match.params.id]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <PosterBackground>
          <MovieData>
            <img
              src={`${config.image.moviePosterUrl}/${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieDetails>
              <h2>{movie.title}</h2>
              <strong>{movie.vote_average}</strong>
              <ul className="detailsList">
                <li>
                  <span className="bold">Release date: </span>
                  {formatDateUtil(movie.release_date)}
                </li>
                <li>
                  <span className="bold">Genres: </span>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <span key={genre.name}>{genre.name} </span>
                    ))}
                </li>
              </ul>
              <p>{movie.overview}</p>
            </MovieDetails>
          </MovieData>
        </PosterBackground>
      )}
    </Container>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
