import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH, COUNT_MOBILE, COUNT_TABLET,
COUNT_DESKTOP, EXTRA_MOBILE_TABLET, EXTRA_DESKTOP} from '../../utils/constants';

function Movies({onSubmit, moviesData, searchRequest, addDeleteHandler, isMovieAdded, filterIsOn, setFilterIsOn, isLoading, setIsLoading, notFoundMain}) {
  const [currentCount, setCurrentCount] = useState(0);
  const [extraRow, setExtraRow] = useState(0);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [screenSize, setScreenSize] = useState(getScreenWidth())
  const [firstMovies, setFirstMovies] = useState(COUNT_MOBILE)

  function getScreenWidth() {
    return window.innerWidth;
  }

  function getFirstMovies(windowSize) {
    if (windowSize <= MOBILE_WIDTH) {
      return(COUNT_MOBILE)
    } if (windowSize > MOBILE_WIDTH && windowSize <= TABLET_WIDTH) {
      return(COUNT_TABLET)
    } else {
      return(COUNT_DESKTOP)
    };
  }

  function getExteraRow(windowSize) {
    if (windowSize <= TABLET_WIDTH) {
      return(EXTRA_MOBILE_TABLET)
    } else {
      return(EXTRA_DESKTOP)
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
			}, 200);
		};
		window.addEventListener('resize', resizeHandler);

    if (firstMovies < getFirstMovies(screenSize) && currentCount<COUNT_DESKTOP) {
      const count=getFirstMovies(screenSize);
      setFirstMovies(getFirstMovies(screenSize))
      setMoviesToRender(moviesData.slice(0, count));
      setCurrentCount(count);
    } else if (screenSize > MOBILE_WIDTH && screenSize <= TABLET_WIDTH && currentCount%EXTRA_MOBILE_TABLET !== 0) {
      const count = currentCount + 1;
      const extraMovies = moviesData.slice(currentCount, count);
      setMoviesToRender([...moviesToRender, ...extraMovies]);
      setCurrentCount(count);
    } else if (screenSize > TABLET_WIDTH && currentCount%EXTRA_DESKTOP !== 0) {
      const count = currentCount + EXTRA_MOBILE_TABLET;
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
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      />

      {isLoading ?  <Preloader/> :
      moviesToRender.length ? <MoviesCardList
      moviesData={moviesToRender}
      addDeleteHandler={addDeleteHandler}
      isMovieAdded ={isMovieAdded}/> :
      notFoundMain ? <span className='movie__result'>Ничего не найдено</span> : <></>}

      {moviesToRender.length < moviesData.length && <Button className={'movies__button'} label={'Eщё'} type={'button'} onClick={buttonMoviesHandler}/>}
    </div>
  );
}

export default Movies;
