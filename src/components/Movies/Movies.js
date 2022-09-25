import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from '../../utils/constants';

function Movies({onSubmit, moviesData, searchRequest, addDeleteHandler, isMovieAdded, filterIsOn, setFilterIsOn, isLoading, errMessage}) {
  const [currentCount, setCurrentCount] = useState(0);
  const [extraRow, setExtraRow] = useState(0);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [screenSize, setScreenSize] = useState(getScreenWidth())
  const [firstMovies, setFirstMovies] = useState(5)

  function getScreenWidth() {
    return window.innerWidth;
  }

  function getFirstMovies(windowSize) {
    if (windowSize <= MOBILE_WIDTH) {
      return(5)
    } if (windowSize > MOBILE_WIDTH && windowSize <= TABLET_WIDTH) {
      return(8)
    } else {
      return(12)
    };
  }

  function getExteraRow(windowSize) {
    if (windowSize <= TABLET_WIDTH) {
      return(2)
    } else {
      return(3)
    };
  }

  useEffect(() => {
    getFirstMovies(screenSize)
    const count=getFirstMovies(screenSize);
    setFirstMovies(count)
    setMoviesToRender(moviesData.slice(0, count));
    setCurrentCount(count);
    setExtraRow(getExteraRow(screenSize))
  }, [moviesData]);

	useEffect(() => {
		let timeOut = null;
		const resizeHandler = () => {
			clearTimeout(timeOut);
			timeOut = setTimeout(() => {
				setScreenSize(getScreenWidth());
			}, 1);
		};
		window.addEventListener('resize', resizeHandler);

    if (firstMovies < getFirstMovies(screenSize) && currentCount<12) {
      const count=getFirstMovies(screenSize);
      setFirstMovies(getFirstMovies(screenSize))
      setMoviesToRender(moviesData.slice(0, count));
      setCurrentCount(count);
    } else if (screenSize > MOBILE_WIDTH && screenSize <= TABLET_WIDTH && currentCount%2 !== 0) {
      const count = currentCount + 1;
      const extraMovies = moviesData.slice(currentCount, count);
      setMoviesToRender([...moviesToRender, ...extraMovies]);
      setCurrentCount(count);
    } else if (screenSize > TABLET_WIDTH && currentCount%3 !== 0) {
      const count = currentCount + 2;
      const extraMovies = moviesData.slice(currentCount, count);
      setMoviesToRender([...moviesToRender, ...extraMovies]);
      setCurrentCount(count);
    }

    setExtraRow(getExteraRow(screenSize))
		return () => window.removeEventListener('resize', resizeHandler);
	}, [screenSize, moviesData]);

  const buttonMoviesHandler = () => {
    const count = currentCount + extraRow;
    const extraMovies = moviesData.slice(currentCount, count);
    setMoviesToRender([...moviesToRender, ...extraMovies]);
    setCurrentCount(count);
  };

  return (
    <div className="movies">
      <SearchForm
      onSubmit={onSubmit}
      searchRequest={searchRequest}
      setFilterIsOn={setFilterIsOn}
      filterIsOn={filterIsOn}
      />

      {isLoading ?  <Preloader/> :
      (moviesToRender.length) ? <MoviesCardList
      moviesData={moviesToRender}
      addDeleteHandler={addDeleteHandler}
      isMovieAdded ={isMovieAdded} /> :
      (searchRequest.length !== 0) ? <span className='movie__result'>Ничего не найдено</span>:
      (errMessage === 'Не удалось загрузить фильмы') ? <span className='movie__result'>Во время запроса произошла ошибка.
      Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span> : <></>}

      {moviesToRender.length < moviesData.length && <Button className={'movies__button'} label={'Eщё'} type={'button'} onClick={buttonMoviesHandler}/>}
    </div>
  );
}

export default Movies;
