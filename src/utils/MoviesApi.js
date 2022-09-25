import { MOVIESAPI_URL } from './constants'

class MoviesApi {
  constructor(config) {
    this._url = config.url
    this._headers = config.headers
  }

  _checkResponseApi(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMoviesApi() {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        ...this._headers,
      }
    })
      .then(this._checkResponseApi)
  }
}

const moviesApi = new MoviesApi({
  url: MOVIESAPI_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;
