import { call, put } from 'redux-saga/effects';
import MovieResource from '~/resources/MovieResource';
import { Creators as MovieDetailActions } from '../ducks/movieDetail';
import { Creators as ErrorActions } from '../ducks/error';

export function* getMovieDetail(action) {
  try {
    const response = yield call(MovieResource.getDetails, action.payload.id);
    yield put(MovieDetailActions.getMovieDetailSuccess(response.data));
  } catch (err) {
    yield put(
      ErrorActions.setError('Was not possible to obtain the movie details.')
    );
  }
}
