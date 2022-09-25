import { MAINAPI_URL, BASE_URL } from './constants'

class MainApi {
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

  getDataApi(token) {
    return Promise.all([this.getMoviesApi(token), this.getUserInfoApi(token)])
  }

  getMoviesApi(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
    })
      .then(this._checkResponseApi)
  }

  getUserInfoApi(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
    })
      .then(this._checkResponseApi)
  }

  changeUserInfo(token, name, email) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
			body: JSON.stringify({
				name,
				email,
			}),
		})
    .then(this._checkResponseApi)
	}

  saveMovie(token, movie) {
    console.log(token)
    console.log(movie)
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        movieId: movie.id,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${BASE_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${BASE_URL}${movie.image.url}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(this._checkResponseApi)
  }

  deleteMovie(token, id) {
		return fetch(`${this._url}/movies/${id}`, {
			method: 'DELETE',
			headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
    })
      .then(this._checkResponseApi)
  }
}

const mainApi = new MainApi({
  url: MAINAPI_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default mainApi;
