import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function NotFoundPage() {
  const navigate = useNavigate();
  const buttonHandler = () => navigate(-1)

  return (
    <div className="not-found-page">
        <h2 className="not-found-page__title">404</h2>
        <p className="not-found-page__text">Страница не найдена</p>

        <Button
        className={'not-found-page__button'}
				type="not-found-page-go-back"
				onClick={buttonHandler}
				label="Назад"
			  />

    </div>
  )
}

export default NotFoundPage
