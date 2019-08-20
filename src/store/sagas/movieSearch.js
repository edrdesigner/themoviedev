import { call, put } from 'redux-saga/effects';
import MovieResource from '~/resources/MovieResource';
import { Creators as MovieSearchActions } from '../ducks/movieSearch';
import { Creators as ErrorActions } from '../ducks/error';

export function* getMovieSearch(action) {
  try {
    const response = yield call(MovieResource.fetch, action.payload.query);
    yield put(MovieSearchActions.getMovieSearchSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Was not possible to search movie.'));
  }
}
