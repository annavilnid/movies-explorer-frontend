import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoviesCard from '../MoviesCard/MoviesCard'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({userData, moviesData}) {
  return (
    <section className='saved-movies'>
      <SearchForm/>
      <MoviesCardList
      userData={userData}
      moviesData={moviesData}
      />
    </section>
  );
}

export default SavedMovies;
