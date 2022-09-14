import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Button from '../Button/Button';

function Movies({userData, moviesData, buttonPropsSave, buttonPropsSaved}) {
  console.log(moviesData.length > 10);

  return (
    <div className="movies">
      <SearchForm/>
      <Preloader/>
      <MoviesCardList
      moviesData={moviesData}
      userData={userData}
      />
      {moviesData.length > 10 && <Button className={'movies__button'} label={'Eщё'}/>}
    </div>
  );
}

export default Movies;
