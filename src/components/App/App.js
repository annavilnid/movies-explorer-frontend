import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import auth from '../../utils/Auth';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext'

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('')

  const [currentUser, setCurrentUser] = useState({});

  const [mainMoviesArray, setMainMoviesArray] = useState(JSON.parse(localStorage.getItem('foundedMovies')) ? JSON.parse(localStorage.getItem('foundedMovies')) : []);
  const [savedMoviesArray, setSavedMoviesArray] = useState([]);

  const [filteredSavedMoviesArray, setFilteredSavedMoviesArray] = useState([]);

  const [searchRequestMain, setSearchRequestMain] = useState(JSON.parse(localStorage.getItem('searchRequest')) || '');
  const [searchRequestSaved, setSearchRequestSaved] = useState('');

  const [notFoundMain, setNotFoundMain] = useState('')
  const [notFoundSaved, setNotFoundSaved] = useState('')

  const [filterIsOnMain, setFilterIsOnMain] = useState(JSON.parse(localStorage.getItem('showShortMovies')) || false);
  const [filterIsOnSaved, setFilterIsOnSaved] = useState(false);

  const [errMessage, setErrMessage]=useState('');

  const [isInfoTooltip, setIsInfoTooltip]=useState(false)

  let mainMovies = JSON.parse(localStorage.getItem('movies'));

  useEffect(() => {
   handleTokenCheck()
  }, [])

  useEffect(() => {
    localStorage.setItem('showShortMovies', filterIsOnMain);
  }, [filterIsOnMain]);

  useEffect(() => {
    if(errMessage) {
      setIsInfoTooltip(true)
    }
  }, [errMessage]);

  useEffect(() => {
    const token = localStorage.getItem('jwt_movie');
    if (isLoggedIn) {
      mainApi.getDataApi(token)
        .then(([movieData, userData]) => {
          setCurrentUser(userData.user)
          const savedUserMovies = movieData.filter(movie => movie.owner === userData.user._id)
          setSavedMoviesArray(savedUserMovies)
        })
        .catch(err => {
          console.log('Не удалось загрузить данные пользователя', err);
          setErrMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.')
        })
    }
  }, [isLoggedIn]);

  const handleTokenCheck = () => {
		const token = localStorage.getItem('jwt_movie');
		if (token) {
			auth.checkToken(token)
				.then((res) => {
					setIsLoggedIn(true);
					setCurrentUser(res.user);
          navigate(location.pathname)
				})
				.catch((err) => {
          handleLogOut()
					console.log('Токен не прошел проверку', err);
          setErrMessage('Токен не прошел проверку')
				});
		}
	};

  const changeUserInfo = (name, email) => {
    const token = localStorage.getItem('jwt_movie');
    mainApi.changeUserInfo(token, name, email)
			.then((userData) => {
				setCurrentUser(userData.user);
        setIsLoading(false);
        setSuccessMessage('Данные пользователя были успешно отредактированы')
			})
			.catch((err) => {
        console.log('Не удалось изменить данные пользователя', err);
        if (err === 'Ошибка: 409') {
          setErrMessage('Не удалось изменить данные пользователя. Пользователь с данной электронной почтой уже зарегестрирован')
        } else {
          setErrMessage('Не удалось изменить данные пользователя. Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.')
        }
        setIsLoading(false);
        handleTokenCheck()
			});
  }

  const handleLogin = (email, password) => {
		auth.authorize(email, password)
			.then((res) => {
				localStorage.setItem('jwt_movie', res.token);
        setIsLoggedIn(true)
		    navigate('/movies')
        setIsLoading(false)
			})
			.catch((err) => {
				console.log('Не удалось залогиниться', err);
        if (err === 'Ошибка: 401') {
          setErrMessage('Неверно указан адрес электронной почты или пароль')
        } else {
          setErrMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        }
        setIsLoading(false)
			});
	};

  const handleRegistration = (name, email, password) => {
    console.log(name, email, password)
		auth.register(name, email, password)
			.then((res) => {
        console.log('Пытаемся зарегестрироваться')
				handleLogin(email, password);
			})
			.catch((err) => {
        console.log('Ошибка при регистрации', err);
        if (err === 'Ошибка: 409') {
          setErrMessage('Пользователь с данной электронной почтой уже зарегестрирован')
        } else {
          setErrMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        }
        setIsLoading(false)
			})
	};

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setIsLoading(false);
    setSuccessMessage('')
		setCurrentUser({});
    setSearchRequestSaved('')
    setMainMoviesArray([])
    setSavedMoviesArray([])
    setFilteredSavedMoviesArray([])
    setSearchRequestMain('')
    setSearchRequestSaved('')
    setNotFoundMain('')
    setNotFoundSaved('')
    setFilterIsOnMain(false)
    setFilterIsOnSaved(false)
    navigate('/')
  }

  const addMovie = (movie) => {
    const token = localStorage.getItem('jwt_movie');
    mainApi.saveMovie(token, movie)
      .then((movieData) => {
        setSavedMoviesArray([...savedMoviesArray, { ...movieData.movie}]);
      })
      .catch((err) => {
        console.log('Не удалось сохранить фильм', err);
        setErrMessage('Не удалось сохранить фильм')
        handleTokenCheck()
      });
  };

  const deleteMovie = (movie) => {
    const token = localStorage.getItem('jwt_movie');
    const movieForDelete = savedMoviesArray.find((i) => (i._id === movie._id) || (i.movieId === movie.id))
    mainApi.deleteMovie(token, movieForDelete._id)
      .then((movieData) => {
          const newsavedMovies = savedMoviesArray.filter(movie => movie._id !== movieData.data._id)
          setSavedMoviesArray(newsavedMovies);
      })
      .catch((err) => {
        console.log('Не удалось удалить фильм', err);
        setErrMessage('Не удалось удалить фильм')
      });
  };

  const isMovieAdded = (movie) => savedMoviesArray.some((i) => (i.movieId === movie.movieId) || (i.movieId === movie.id))

  const addDeleteHandler = (movie, isAdded) => (isAdded ? addMovie(movie) : deleteMovie(movie));

  const filterBySymbols = (movie, symbols) => movie.nameRU.toLowerCase()
		.includes(symbols.toLowerCase());

  const handleMoviesSearch = async (search) => {
    setIsLoading(true);
		if(!mainMovies) {
		  await moviesApi.getMoviesApi()
			.then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
					mainMovies = JSON.parse(localStorage.getItem('movies'));
			})
			.catch((err) => {
        setIsLoading(false);
				console.log('Не удалось загрузить фильмы', err);
        setErrMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
			})
    }
      const filtered = mainMovies.filter((movie) => filterBySymbols(movie, search));
			setMainMoviesArray(filtered);
			localStorage.setItem('foundedMovies', JSON.stringify(filtered));
			localStorage.setItem('searchRequest', JSON.stringify(search));
			setSearchRequestMain(search);
			setIsLoading(false);
      setNotFoundMain('Ничего не найдено')
      setIsLoading(false)
	};

  const handleSavedMoviesSearch = (search) => {
    const filtered = savedMoviesArray.filter((movie) => filterBySymbols(movie, search));
		setFilteredSavedMoviesArray(filtered);
		setSearchRequestSaved(search);
    setNotFoundSaved('Ничего не найдено')
    setIsLoading(false)
	};

  const filterHandler = (movies, filtred) => {
    if (filtred) {
      return movies.filter(movie => movie.duration < 40);
    } else {
      return movies
    }
  }

  function handleEditNavigationClick() {
    setNavigationOpen(true)
  }

  function closeAllPopups() {
    setNavigationOpen(false)
  }

  function closeInfoTooltip() {
    setIsInfoTooltip(false)
    setErrMessage('')
  }

  return (
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
      <Header
      handleEditNavigationClic={handleEditNavigationClick}
      isLoggedIn={isLoggedIn}
      isNavigationOpen={isNavigationOpen}
      closeAllPopups={closeAllPopups}
      />
      <Routes>
        <Route exact path={'/'} element={<Main/>}/>

        <Route
        exact path="/movies"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Movies
          moviesData = {filterHandler(mainMoviesArray, filterIsOnMain)}
          filterIsOn = {filterIsOnMain}
          setFilterIsOn = {setFilterIsOnMain}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          onSubmit={handleMoviesSearch}
          searchRequest={searchRequestMain}
          addDeleteHandler={addDeleteHandler}
          isMovieAdded={isMovieAdded}
          notFoundMain={notFoundMain}
          />
          </ProtectedRoute>
        }
        />

        <Route
        exact path="/saved-movies"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
          <SavedMovies
          moviesData = {filterHandler(searchRequestSaved ? filteredSavedMoviesArray : savedMoviesArray, filterIsOnSaved)}
          filterIsOn = {filterIsOnSaved}
          setFilterIsOn = {setFilterIsOnSaved}
          searchRequest={searchRequestSaved}
          setSearchRequestSaved={setSearchRequestSaved}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          onSubmit={handleSavedMoviesSearch}
          isMovieAdded={isMovieAdded}
          handleDeleteMovie={deleteMovie}
          notFoundSaved={notFoundSaved}
          />
          </ProtectedRoute>
        }
        />

        <Route
        exact path="/profile"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Profile
          onClick={handleLogOut}
          changeUserInfo={changeUserInfo}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
          />
          </ProtectedRoute>
        }
        />

        { !isLoggedIn && <Route exact path={'/signup'} element={<Register onSubmit={handleRegistration} isLoading={isLoading} setIsLoading={setIsLoading}/>}/> }
        { !isLoggedIn && <Route exact path={'/signin'} element={<Login onSubmit={handleLogin} isLoading={isLoading} setIsLoading={setIsLoading}/>}/> }
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
      <InfoTooltip
      isOpen={isInfoTooltip}
      errMessage={errMessage}
      onClose={closeInfoTooltip}
      />
      <Footer/>
      </CurrentUserContext.Provider>
      </div>
  );
}

export default App;
