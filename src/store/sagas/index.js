import { all, takeLatest } from 'redux-saga/effects';
import { Types as MovieDetailTypes } from '../ducks/movieDetail';
import { Types as MoviesDisoverTypes } from '../ducks/moviesDiscover';
import { getMovieDetail } from './movieDetail';
import { getMoviesDisvovery } from './moviesDiscover';

export default function* rootSaga() {
  yield all([
    takeLatest(MovieDetailTypes.GET_REQUEST, getMovieDetail),
    takeLatest(MoviesDisoverTypes.GET_REQUEST, getMoviesDisvovery),
  ]);
}
