import { useEffect } from "react";
import Logo from "../logo/logo";
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({onSubmit}) {
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
    onSubmit(values.email, values.password);
  };

  return (
    <div className="login">
      <Logo className={'login__logo logo'}/>
      <Form
      onSubmit={submitHandler}
      formClassName='login__form'
      title='Рады видеть!'
      titleClassName='login__title'
      buttonClassName='login__button'
      buttonsClassName='login__button-wrapper'
      buttonlabel='Войти'
      linkClassName="login__link"
      linkTo="/signup"
      linkValue='Регистрация'
      spanClassName='login__text'
      spanText="Еще не зарегестрированы?"
      wrapperClassName='login__link-wrapper'
      disabled={(!values.email || !values.password || !isValid)}
      >
      <div className="login__wrapper">
        <span className="login__span">
				E-mail
			  </span>
				<input
        className={`login__input ${errors.email&&'login__input_error'}`}
				id="email"
				type="text"
				name="email"
				placeholder="E-mail"
        value={values.email || ''}
        onChange={handleChange}
				/>
        </div>
      <span className="login__error">{validateEmail()}</span>
      <div className="login__wrapper">
			  <span className="login__span">
				Пароль
			  </span>
        <input
			  className={`login__input ${errors.password&&'login__input_error'}`}
        required
        minLength="2"
        maxLength="30"
				id="password"
				type="password"
				name="password"
        placeholder="Пароль"
        value={values.password || ''}
        onChange={handleChange}
				/>
      </div>
      <span className="login__error">{errors.password}</span>
    </Form>
    </div>
  );
}

export default Login;
