import Logo from "../logo/logo";
import Form from '../Form/Form';

function Login() {
  return (
    <div className="login">
      <Logo className={'login__logo logo'}/>
      <Form
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
      >
      <div className="login__wrapper">
        <span className="login__span">
				E-mail
			  </span>
				<input
				required
				className="login__input"
				id="email"
				type="email"
				name="email"
				placeholder="E-mail"
				defaultValue="pochta@yandex.ru"
				/>
        </div>
      <span className="login__error"></span>
      <div className="login__wrapper">
			  <span className="login__span">
				Пароль
			  </span>
        <input
				required
				className="login__input"
				id="password"
				type="password"
				name="password"
				placeholder=""
				/>
      </div>
      <span className="login__error"></span>
    </Form>
    </div>
  );
}

export default Login;
