import Button from "../Button/Button";
import { useState} from 'react';

function MoviesCard({movieData, addDeleteHandler, isMovieAdded, handleDeleteMovie}) {

   const [add, setIsAdded] = useState(isMovieAdded(movieData))

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    addDeleteHandler(movieData, !add);
    setIsAdded(!add)
  };

  const imageUrl = () => movieData.image.url ? `https://api.nomoreparties.co${movieData.image.url}` : movieData.image

  const deleteHandler = (event) => {
    handleDeleteMovie(movieData)
  }

  const getStrTime = (time) => {
    const arrStr = ['минута', 'минуты', 'минут']
    let m = Math.abs(time) % 100;
    let n1 = m % 10;
    if (m > 10 && m < 20) { return arrStr[2]; }
    if (n1 > 1 && n1 < 5) { return arrStr[1]; }
    if (n1 === 1) { return arrStr[0]; }
    return arrStr[2];
  }

  const val = <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.75L3.81905 6L9 1.5" stroke="white" strokeWidth="1.5"/></svg>

  const makeButtonMarkup = () => {
    if (Object.keys(movieData).includes('owner')) {
      return <Button className={'movie-card__button'} onClick={deleteHandler} ariaLabel="удалить" label={'x'} />
    } else if (add) {
      return <Button className={'movie-card__saved'} onClick={handleBookmarkClick} ariaLabel="удалить" label={val} />
    } else {
      return <Button className={'movie-card__button'} onClick={handleBookmarkClick} label={'Сохранить'} />
    }
  }

  let buttonMovieCard = makeButtonMarkup();

	return (
		<li className="movie-card">
      <div className="movie-card__info">
				<p className="movie-card__title">
					{movieData.nameRU}
				</p>
				<span className="movie-card__length">{`${movieData.duration} ${getStrTime(movieData.duration)}`}</span>
			</div>
      <a href={movieData.trailerLink} target="_blank" rel="noreferrer" className="movie-card__link">
			  <img className="movie-card__image" src={imageUrl()} alt={'афиша фильма'} />
      </a>
      {buttonMovieCard}
		</li>
  );
}

export default MoviesCard;
