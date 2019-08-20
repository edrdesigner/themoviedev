import { combineReducers } from 'redux';
import error from './error';
import moviesDiscover from './moviesDiscover';
import movieDetail from './movieDetail';

export default combineReducers({
  error,
  moviesDiscover,
  movieDetail,
});
