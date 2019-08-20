import { combineReducers } from 'redux';
import error from './error';
import moviesDiscover from './moviesDiscover';
import movieSearch from './movieSearch';

export default combineReducers({
  error,
  moviesDiscover,
  movieSearch,
});
