import api from '~/service/api';
import config from '~/config';

export default class MovieResource {
  static discover(sort_by) {
    return api.get('discover/movie', {
      params: { api_key: config.api.key, sort_by },
    });
  }

  static fetch(query) {
    return api.get('search/movie/', {
      params: { api_key: config.api.key, query },
    });
  }

  static getDetails(id) {
    return api.get(`movie/${id}`, {
      params: { api_key: config.api.key },
    });
  }

  static getSimilar(id) {
    return api.get(`movie/${id}/similar`, {
      params: { api_key: config.api.key },
    });
  }
}
