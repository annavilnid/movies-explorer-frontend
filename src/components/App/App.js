import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import {useState} from 'react'
import firstMovie from '../../images/first-movie.jpg'
import secondMovie from '../../images/second-movie.jpg'
import thirdMovie from '../../images/third-movie.jpg'

function App() {
  const userData = {
    id: "631876b123aeef3464e6f20f",
    name: "66",
    email: "test66@mail.ru"
  }

  const moviesData = [
    {
      id: 1,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: firstMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 2,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: secondMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 3,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: thirdMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 4,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: firstMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 5,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: secondMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 6,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: thirdMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0

    },
    {
      id: 7,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: firstMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 8,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: secondMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 9,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: thirdMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 10,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: firstMovie,
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 11,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: secondMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    },
    {
      id: 12,
      country: "Россия",
      director: "Зак Снайдер",
      duration: '27 минут',
      year: "2004",
      description: "Фильм",
      image: "http://yandex.ru/pic1.jpg",
      trailerLink: thirdMovie,
      thumbnail: "http://yandex.ru/pic1.jpg",
      nameRU: "В погоне за Бенкси",
      nameEN: "Movie",
      __v: 0
    }
  ]

  const moviesUserData = [
    {
        id: "6318771b23aeef3464e6f212",
        country: "Россия",
        director: "Зак Снайдер",
        duration: '27 минут',
        year: "2004",
        description: "Фильм",
        image: "http://yandex.ru/pic1.jpg",
        trailerLink: firstMovie,
        thumbnail: "http://yandex.ru/pic1.jpg",
        owner: "631876b123aeef3464e6f20f",
        movieId: 1,
        nameRU: "В погоне за Бенкси",
        nameEN: "Movie",
        __v: 0
    },
    {
        id: "6318776223aeef3464e6f214",
        country: "Россия",
        director: "Зак Снайдер",
        duration: '27 минут',
        year: "2004",
        description: "Фильм",
        image: "http://yandex.ru/pic1.jpg",
        trailerLink: secondMovie,
        thumbnail: "http://yandex.ru/pic1.jpg",
        owner: "631876b123aeef3464e6f20f",
        movieId: 9,
        nameRU: "В погоне за Бенкси",
        nameEN: "Movie",
        __v: 0
    },
    {
        id: "6318777b23aeef3464e6f218",
        country: "Россия",
        director: "Зак Снайдер",
        duration: '27 минут',
        year: "2004",
        description: "Фильм",
        image: "http://yandex.ru/pic1.jpg",
        trailerLink: thirdMovie,
        thumbnail: "http://yandex.ru/pic1.jpg",
        owner: "631876b123aeef3464e6f20f",
        movieId: 11,
        nameRU: "В погоне за Бенкси",
        nameEN: "Movie",
        __v: 0
    }
  ]

  const arrayIdSavedMovies = moviesUserData.map((i)=> i.movieId)
  const newData = (moviesData.map((i) =>
    arrayIdSavedMovies.includes(i.id) ? {...i, saved: true} : {...i, saved: false}
  ))

  const handlerIsOwn = () => console.log('нажали на кнопку')

  const buttonProps = {
    saved: {
      className: 'movie-card__saved',
      onClic: handlerIsOwn,
      label: 'Сохранено'
    },
    save: {
        className: 'movie-card__save',
        onClic: handlerIsOwn,
        label: 'Сохранено'
    },
    delite: {
        className: 'movie-card__delite',
        onClic: handlerIsOwn,
        label: 'Сохранено'
    }
  }


  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  function handleEditNavigationClick() {
    setNavigationOpen(true)
  }

  function closeAllPopups() {
    setNavigationOpen(false)
    }

  return (
      <div className='page'>
      <Header
      handleEditNavigationClic={handleEditNavigationClick}
      isLoggedIn={isLoggedIn}
      isNavigationOpen={isNavigationOpen}
      closeAllPopups={closeAllPopups}
      />
      {/* <Navigation
      isNavigationOpen={isNavigationOpen}
      closeAllPopups={closeAllPopups}
      /> */}
      <Routes>
        <Route exact path={'/'} element={<Main/>}/>
        <Route exact path={'/movies'} element={<Movies userData={userData} moviesData={newData} buttonPropsSave={buttonProps.save} buttonPropsSaveed={buttonProps.saveed}/>}/>
        <Route exact path={'/saved-movies'} element={<SavedMovies userData={userData} moviesData={moviesUserData} buttonPropsSave={buttonProps.dalite}/>}/>
        <Route exact path={'/profile'} element={<Profile/>}/>
        <Route exact path={'/signin'} element={<Login/>}/>
        <Route exact path={'/signup'} element={<Register/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
