export const Types = {
  GET_REQUEST: 'movieSearch/GET_REQUEST',
  GET_SUCCESS: 'movieSearch/GET_SUCCESS',
  GET_RESET_SEARCH: 'movieSearch/GET_RESET_SEARCH',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function movieSearch(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_RESET_SEARCH:
      return { ...state, loading: false, data: [] };
    default:
      return state;
  }
}

export const Creators = {
  getMovieSearchRequest: query => ({
    type: Types.GET_REQUEST,
    payload: { query },
  }),
  getMovieSearchSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  getMovieSearchReset: () => ({
    type: Types.GET_RESET_SEARCH,
  }),
};
