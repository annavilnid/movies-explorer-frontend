import Logo from "../logo/logo";
import Form from "../Form/Form"
import { useEffect } from "react";
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register({onSubmit, isLoading, setIsLoading}) {
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    validateEmail
  } = useFormWithValidation();

  useEffect(() => {
	  setIsValid(true);
	}, [ setValues, setIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (!isLoading) {
      onSubmit(values.name, values.email, values.password);
    }
  };

  return (
    <div className="register">
      <Logo className='register__logo logo'/>
      <Form
      onSubmit={submitHandler}
      formClassName='register__form'
      title='Добро пожаловать!'
      titleClassName='register__title'
      buttonClassName='register__button'
      buttonsClassName='register__button-wrapper'
      buttonlabel='Зарегестрироваться'
      linkClassName="register__link"
      linkTo="/signin"
      linkValue='Войти'
      spanClassName='register__text'
      spanText="Уже зарегестрированы?"
      wrapperClassName='register__link-wrapper'
      disabled={(!values.name || !values.email || !values.password || !isValid || validateEmail() || isLoading)}
      >
      <div className="register__wrapper">
        <span className="register__span">
			  Имя
				</span>
        <input
        className={`register__input ${errors.name&&'register__input_error'}`}
				required
        minLength="2"
        maxLength="30"
				id="name"
				type="name"
				name="name"
				placeholder="Имя"
        value={values.name || ''}
        onChange={handleChange}
        disabled={isLoading}
				/>
      </div>
      <span className="register__error">{errors.name}</span>
      <div className="register__wrapper">
      <span className="register__span">
			  E-mail
				</span>
        <input
				className={`register__input ${errors.email&&'register__input_error'}`}
				id="email"
				type="text"
				name="email"
				placeholder="E-mail"
        value={values.email || ''}
        onChange={handleChange}
        disabled={isLoading}
				/>
      </div>
      <span className="register__error">{validateEmail()}</span>
      <div className="register__wrapper">
			  <span className="register__span">
				Пароль
			  </span>
        <input
				className={`register__input ${errors.password&&'register__input_error'}`}
        required
        minLength="2"
        maxLength="30"
				id="password"
				type="password"
				name="password"
				placeholder="Пароль"
        value={values.password || ''}
        onChange={handleChange}
        disabled={isLoading}
			  />
      </div>
      <span className="register__error">{errors.password || ''}</span>
    </Form>
    </div>
  );
}

export default Register;
