export const Types = {
  GET_REQUEST: 'moviesDiscover/GET_REQUEST',
  GET_SUCCESS: 'moviesDiscover/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function moviesDiscover(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getMoviesDiscoverRequest: () => ({ type: Types.GET_REQUEST }),
  getMoviesDiscoverSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
