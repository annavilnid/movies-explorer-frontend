import MoviesCard from '../MoviesCard/MoviesCard'
import Button from '../Button/Button';

function MoviesCardList({userData, moviesData}) {

  return (
    <>
      <ul className="movies__list" >
        {moviesData.map((i, index) => (
        <MoviesCard key={index}
        userData={userData}
        movieData={i}
        />
        ))}
      </ul>
    </>
  );
}

export default MoviesCardList;
