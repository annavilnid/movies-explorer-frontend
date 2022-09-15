import Logo from "../logo/logo";
import Form from "../Form/Form"

function Register() {
  return (
    <div className="register">
      <Logo className='register__logo logo'/>
      <Form
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
      >
      <div className="register__wrapper">
        <span className="register__span">
			  Имя
				</span>
        <input
				required
				className="register__input"
				id="name"
				type="name"
				name="name"
				placeholder="Виталий"
				defaultValue="Виталий"
				/>
      </div>
      <span className="register__error"></span>
      <div className="register__wrapper">
        <span className="register__span">
				E-mail
			  </span>
				<input
				required
				className="register__input"
				id="email"
				type="email"
				name="email"
				placeholder="E-mail"
				defaultValue="pochta@yandex.ru"
				/>
      </div>
      <span className="register__error"></span>
      <div className="register__wrapper">
			  <span className="register__span">
				Пароль
			  </span>
        <input
				required
				className="register__input register__input_error"
				id="password"
				type="password"
				name="password"
				placeholder=""
				defaultValue="11111111111111"
			  />
      </div>
      <span className="register__error">что-то пошло не так</span>
    </Form>
    </div>
  );
}

export default Register;
