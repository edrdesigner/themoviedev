import { all, takeLatest } from 'redux-saga/effects';
import { Types as MovieDetailTypes } from '../ducks/movieDetail';
import { getMovieDetail } from './movieDetail';

export default function* rootSaga() {
  yield all([takeLatest(MovieDetailTypes.GET_REQUEST, getMovieDetail)]);
}
