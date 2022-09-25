import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({userData, moviesData, addDeleteHandler, isMovieAdded, handleDeleteMovie}) {

  return (
    <>
      <ul className="movies__list" >
        {moviesData.map((i, index) => (
        <MoviesCard key={index}
        userData={userData}
        movieData={i}
        addDeleteHandler={addDeleteHandler}
        isMovieAdded={isMovieAdded}
        handleDeleteMovie={handleDeleteMovie}
        />
        ))}
      </ul>
    </>
  );
}

export default MoviesCardList;
