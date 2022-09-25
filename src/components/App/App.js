import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import auth from '../../utils/Auth';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext'

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [mainMoviesArray, setMainMoviesArray] = useState([]);
  const [savedMoviesArray, setSavedMoviesArray] = useState([]);

  const [filteredSavedMoviesArray, setFilteredSavedMoviesArray] = useState([]);

  const [searchRequestMain, setSearchRequestMain] = useState('');
  const [searchRequestSaved, setSearchRequestSaved] = useState('');

  const [filterIsOnMain, setFilterIsOnMain] = useState(false)
  const [filterIsOnSaved, setFilterIsOnSaved] = useState(false)

  const [errMessage, setErrMessage]=useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwt_movie');
    handleTokenCheck()
    console.log(token)
    if (isLoggedIn) {
      mainApi.getDataApi(token)
        .then(([movieData, userData]) => {
          const savedUserMovies = movieData.filter(movie => movie.owner === userData.user._id)
          setSavedMoviesArray(savedUserMovies)
        })
        .catch(err => {
          console.log('Не удалось загрузить данные пользователя', err);
          setErrMessage('Не удалось загрузить данные пользователя')
        })
    }
  }, [isLoggedIn]);

  const changeUserInfo = (name, email) => {
    mainApi.changeUserInfo(name, email)
			.then((userData) => {
				setCurrentUser(userData.user);
			})
			.catch((err) => {
        console.log('Не удалось изменить данные пользователя', err);
        setErrMessage('Не удалось изменить данные пользователя')
			});
  }

  const handleTokenCheck = () => {
		const token = localStorage.getItem('jwt_movie');
		if (token) {
			auth.checkToken(token)
				.then((res) => {
          console.log('токен прошел проверку')
					setIsLoggedIn(true);
					setCurrentUser(res.user);
				})
				.catch((err) => {
					console.log('Токен не прошел проверку', err);
          setErrMessage('Токен не прошел проверку')
				});
		}
	};

  const handleLogin = (email, password) => {
		auth.authorize(email, password)
			.then((res) => {
				localStorage.setItem('jwt_movie', res.token);
        setIsLoggedIn(true);
		    navigate('/movies')
				handleTokenCheck();
			})
			.catch((err) => {
				console.log('Не удалось залогиниться', err);
        setErrMessage('Не удалось залогиниться')
			});
	};

  const handleRegistration = (name, email, password) => {
		auth.register(name, email, password)
			.then((res) => {
				handleLogin(email, password);
        // setIsLoggedIn(true);
			})
			.catch((err) => {
        console.log('Ошибка при регистрации', err);
        setErrMessage('Ошибка при регистрации')
			});
	};

  const handleLogOut = () => {
    setIsLoggedIn(false);
		localStorage.clear();
		setCurrentUser({});
    searchRequestMain('')
    searchRequestSaved('')
    mainMoviesArray([])
    savedMoviesArray([])
    filteredSavedMoviesArray([])
    errMessage('')
  }

  const addMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((movieData) => {
        setSavedMoviesArray([...savedMoviesArray, { ...movieData.movie}]);
      })
      .catch((err) => {
        console.log('Не удалось сохранить фильм', err);
        setErrMessage('Не удалось сохранить фильм')
      });
  };

  const deleteMovie = (movie) => {
    const movieForDelete = savedMoviesArray.find((i) => (i._id === movie._id) || (i.movieId === movie.id))
    mainApi.deleteMovie(movieForDelete._id)
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

  const handleMoviesSearch = (search) => {
		setIsLoading(true);
		setMainMoviesArray([]);
		moviesApi.getMoviesApi()
			.then((res) => {
				const filtered = res.filter((movie) => filterBySymbols(movie, search));
				setMainMoviesArray(filtered);
				localStorage.setItem('foundedMovies', JSON.stringify(filtered));
				localStorage.setItem('searchRequest', search);
				setSearchRequestMain(search);
				setIsLoading(false);
			})
			.catch((err) => {
        setIsLoading(false);
				console.log('Не удалось загрузить фильмы', err);
        setErrMessage('Не удалось загрузить фильмы')
			});
	};

  const handleSavedMoviesSearch = (search) => {
    const filtered = savedMoviesArray.filter((movie) => filterBySymbols(movie, search));
		setFilteredSavedMoviesArray(filtered);
		setSearchRequestSaved(search);
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
          onSubmit={handleMoviesSearch}
          searchRequest={searchRequestMain}
          addDeleteHandler={addDeleteHandler}
          isMovieAdded={isMovieAdded}
          isLoading={isLoading}
          errMessage={errMessage}
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
          onSubmit={handleSavedMoviesSearch}
          isMovieAdded={isMovieAdded}
          handleDeleteMovie={deleteMovie}
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
          />
          </ProtectedRoute>
        }
        />

        <Route exact path={'/signup'} element={<Register onSubmit={handleRegistration}/>}/>
        <Route exact path={'/signin'} element={<Login onSubmit={handleLogin}/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      </CurrentUserContext.Provider>
      </div>
  );
}

export default App;
