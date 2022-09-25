import { useEffect, useContext} from "react";
import { CurrentUserContext } from '../../context/CurrentUserContext'
import Form from "../Form/Form"
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({onClick, changeUserInfo}) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    validateEmail,
  } = useFormWithValidation();

  useEffect(() => {
		setValues(currentUser);
	  setIsValid(true);
	}, [currentUser, setValues, setIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    changeUserInfo(values.name, values.email,);
  };

  return (
    <div className="profile">
    <Form
      onSubmit={submitHandler}
      onClick={onClick}
      formClassName='profile__form'
      title={`Привет, ${currentUser.name}`}
      titleClassName='profile__title'
      buttonClassName='profile__button'
      buttonlabel='Редактировать'
      linkClassName="profile__link"
      linkTo="/"
      linkValue='Выйти из аккаунта'
      buttonsClassName='profile__button-wrapper'
      wrapperClassName='profile__link-wrapper'
      disabled={(values.name === currentUser.name
      && values.email === currentUser.email) || !isValid}
    >
    <span className="profile__error">{errors.name}</span>
    <div className="profile__wrapper">
      <span className="profile__span">
			Имя
			</span>
			<input
			required
      minLength="2"
      maxLength="30"
			className="profile__input"
			id="name"
			type="text"
			name="name"
      placeholder="Имя"
      value={values.name || ''}
      onChange={handleChange}
      autoComplete="off"
			/>
    </div>
    <div className="profile__wrapper">
      <span className="profile__span">
      E-mail
      </span>
      <input
			className="profile__input"
			id="email"
			type="email"
			name="email"
      placeholder="E-mail"
      value={values.email || ''}
      onChange={handleChange}
      autoComplete="off"
			/>
    </div>
    <span className="profile__error">{validateEmail()}</span>
    </Form>
    </div>
  );
}

export default Profile;
