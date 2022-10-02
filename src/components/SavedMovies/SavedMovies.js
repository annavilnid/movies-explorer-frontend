import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({userData, moviesData, onSubmit, handleDeleteMovie, isMovieAdded, filterIsOn, setFilterIsOn, searchRequest, setSearchRequestSaved, notFoundSaved, isLoading, setIsLoading}) {

  return (
    <section className='saved-movies'>
      <SearchForm onSubmit={onSubmit}
      filterIsOn={filterIsOn}
      setFilterIsOn={setFilterIsOn}
      searchRequest={searchRequest}
      setSearchRequestSaved={setSearchRequestSaved}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      />

      {moviesData.length ? <MoviesCardList
      userData={userData}
      moviesData={moviesData}
      handleDeleteMovie={handleDeleteMovie}
      isMovieAdded={isMovieAdded}
      filterIsOn={filterIsOn}
      setFilterIsOn={setFilterIsOn}
      />:
      notFoundSaved? <span className='movie__result'>Ничего не найдено</span> : <></>}

    </section>
  );
}

export default SavedMovies;
