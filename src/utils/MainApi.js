import { MAINAPI_URL, BASE_URL } from './constants'
const JWT = localStorage.getItem('jwt_movie');

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
    console.log(JWT);
    console.log(token);
    return Promise.all([this.getMoviesApi(token), this.getUserInfoApi(token)])
  }

  getMoviesApi(token) {
    console.log(token)
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
    console.log(token)
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
    })
      .then(this._checkResponseApi)
  }

  changeUserInfo(name, email) {
    console.log(JWT);
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: {
        ...this._headers,
        'Authorization': `Bearer ${JWT}`
      },
			body: JSON.stringify({
				name,
				email,
			}),
		})
    .then(this._checkResponseApi)
	}

  saveMovie(movie) {
    console.log(JWT)
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${JWT}`
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

  deleteMovie(id) {
		return fetch(`${this._url}/movies/${id}`, {
			method: 'DELETE',
			headers: {
        ...this._headers,
        'Authorization': `Bearer ${JWT}`
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
