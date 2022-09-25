import { MAINAPI_URL } from './constants'

class Auth {
  constructor(config) {
    this._BASE_URL = config.url;
    this._headers = config.headers;
  }

  _checkResponseAuth(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  register(dataName, dataEmail, dataPassword) {
    return fetch(`${this._BASE_URL}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataName,
        email: dataEmail,
        password: dataPassword,
      })
    })
      .then(this._checkResponseAuth)
  };

  authorize(dataEmail, dataPassword) {
  return fetch(`${this._BASE_URL}/signin`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      email: dataEmail,
      password: dataPassword,
    })
  })
    .then(this._checkResponseAuth)
};

  checkToken(JWT) {
    return fetch(`${this._BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${JWT}`
      }
    })
      .then(this._checkResponseAuth)
  };
}

  const auth = new Auth({
    url: MAINAPI_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });



export default auth;
