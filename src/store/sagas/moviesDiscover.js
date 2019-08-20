import { call, put } from 'redux-saga/effects';
import MovieResource from '~/resources/MovieResource';
import { Creators as MovieDiscoverActions } from '../ducks/moviesDiscover';
import { Creators as ErrorActions } from '../ducks/error';

export function* getMoviesDisvovery() {
  try {
    const response = yield call(MovieResource.discover, 'popularity.desc');
    yield put(MovieDiscoverActions.getMoviesDiscoverSuccess(response.data));
  } catch (err) {
    yield put(
      ErrorActions.setError('Was not possible to obtain the movie details.')
    );
  }
}
