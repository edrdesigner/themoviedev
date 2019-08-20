import React from 'react';
import config from '~/config'
import PropTypes from 'prop-types';

import { Container, PosterBackground, MovieData, MovieDetails } from './styles';

export default function Detail({movieDetail = {}, getMovieDetail}) {
  return (
    <Container>
      <PosterBackground>
        <MovieData>
          <img src={config.image.placeholderUrl} alt="movi" />
          <MovieDetails>
            <h2>Titulo</h2>
            <strong>5 stars</strong>
            <ul className="detailsList">
                <li><span className="bold">Release date:</span> {movieDetail.releaseDate} </li>
                <li><span className="bold">Rating: </span> {movieDetail.voteAverage} </li>
                <li><span className="bold">Vote count: </span> {movieDetail.voteCount} </li>
                <li><span className="bold">Genres: </span>{movieDetail.genre}</li>
            </ul>
            <p>
              bio
            </p>
          </MovieDetails>
        </MovieData>
      </PosterBackground>
    </Container>
  );
}

Detail.propTypes = {
  movieDetail: PropTypes.object,
  getMovieDetails: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
        id: PropTypes.string,
    })
  })
}
