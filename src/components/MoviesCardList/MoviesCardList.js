import MoviesCard from '../MoviesCard/MoviesCard'
import { v4 as uuidv4 } from 'uuid';

function MoviesCardList({userData, moviesData, addDeleteHandler, isMovieAdded, handleDeleteMovie}) {

  return (
    <div>
      <ul className="movies__list" >
        {moviesData.map((i) => (
        <MoviesCard key={uuidv4()}
        userData={userData}
        movieData={i}
        addDeleteHandler={addDeleteHandler}
        isMovieAdded={isMovieAdded}
        handleDeleteMovie={handleDeleteMovie}
        />
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
