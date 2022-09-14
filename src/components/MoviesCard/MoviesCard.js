import Button from "../Button/Button";

function MoviesCard({userData, movieData}) {

  const val = <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.75L3.81905 6L9 1.5" stroke="white" strokeWidth="1.5"/></svg>

  const makeButtonMarkup = () => {
    if (Object.keys(movieData).includes('owner')) {
      return <Button className={'movie-card__button'} onClick={console.log('кнопка удалить нажата')} label={'x'} />
    } else if ((movieData.saved === true)) {
      return <Button className={'movie-card__saved'} onClick={console.log('кнопка отмена сохранить нажата')} label={val} />
    } else {
      return <Button className={'movie-card__button'} onClick={console.log('кнопка сохранить нажата')} label={"Сохранить"} />
    }
  }

  let buttonMovieCard = makeButtonMarkup();

	return (
		<li className="movie-card">
      <div className="movie-card__info">
				<p className="movie-card__title">
					{movieData.nameRU}
				</p>
				<span className="movie-card__length">{movieData.duration}</span>
			</div>
			<img className="movie-card__image" src={movieData.trailerLink} alt={movieData.description} />
      {buttonMovieCard}
		</li>
  );
}

export default MoviesCard;
