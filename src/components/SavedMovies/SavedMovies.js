import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoviesCard from '../MoviesCard/MoviesCard'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({userData, moviesData}) {
  // const savedMoviesData = (moviesData.map((i)=>(i.saved.includes(userData.id) && i )))
  // console.log((moviesData.map((i)=>(i.saved.includes(userData.id)  i ))))
  // console.log(moviesData.map((i)=>(i.saved.filter((j)=> j === userData))))
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
