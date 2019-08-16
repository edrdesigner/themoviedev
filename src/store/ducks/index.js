import { combineReducers } from 'redux';
import error from './error';
import movieDetail from './movieDetail';

export default combineReducers({
  error,
  movieDetail,
});
