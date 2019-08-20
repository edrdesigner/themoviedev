import { all, takeLatest } from 'redux-saga/effects';
import { Types as MoviesDisoverTypes } from '../ducks/moviesDiscover';
import { Types as MovieSearchTypes } from '../ducks/movieSearch';
import { getMoviesDisvovery } from './moviesDiscover';
import { getMovieSearch } from './movieSearch';

export default function* rootSaga() {
  yield all([
    takeLatest(MoviesDisoverTypes.GET_REQUEST, getMoviesDisvovery),
    takeLatest(MovieSearchTypes.GET_REQUEST, getMovieSearch),
  ]);
}
