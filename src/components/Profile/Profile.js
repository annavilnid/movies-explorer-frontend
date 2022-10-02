import { useEffect, useContext} from "react";
import { CurrentUserContext } from '../../context/CurrentUserContext'
import Form from "../Form/Form"
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({onClick, changeUserInfo, isLoading, setIsLoading, successMessage, setSuccessMessage}) {
  useEffect(() => {
		setSuccessMessage('');
	}, [setSuccessMessage]);

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

  const profileHandleChange = (e) => {
    handleChange(e)
    setSuccessMessage('');
  }

  useEffect(() => {
		setSuccessMessage('');
	}, [setSuccessMessage]);

  useEffect(() => {
		setValues(currentUser);
	  setIsValid(true);
	}, [currentUser, setValues, setIsValid, setSuccessMessage]);

  const submitHandler = (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (!isLoading) {
      changeUserInfo(values.name, values.email);
    }
  };

  return (
    <div className="profile">
      <Form
      onSubmit={!isLoading ? submitHandler : ''}
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
      && values.email === currentUser.email) || !isValid || validateEmail() || isLoading}
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
        onChange={profileHandleChange}
        autoComplete="off"
        disabled={isLoading}
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
        onChange={profileHandleChange}
        autoComplete="off"
        disabled={isLoading}
			  />
      </div>
      <span className="profile__error">{validateEmail()}</span>
      {successMessage ? <span className="profile__success-message">{successMessage}</span> : <></>}
    </Form>
    </div>
  );
}

export default Profile;
