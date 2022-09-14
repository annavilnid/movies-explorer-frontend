import Form from "../Form/Form"

function Profile() {
  return (
    <div className="profile">

    <Form
      formClassName='profile__form'
      title='Привет, Виталий!'
      titleClassName='profile__title'
      buttonClassName='profile__button'
      buttonlabel='Редактировать'
      linkClassName="profile__link"
      linkTo="/"
      linkValue='Выйти из аккаунта'
      buttonsClassName='profile__button-wrapper'
      wrapperClassName='profile__link-wrapper'
    >
    <div className="profile__wrapper">
      <span className="profile__span">
			Имя
			</span>
			<input
			required
			className="profile__input"
			id="name"
			type="name"
			name="name"
			placeholder="Виталий"
			defaultValue="Виталий"
			/>
    </div>
    <span className="profile__error"></span>
    <div className="profile__wrapper">
      <span className="profile__span">
      E-mail
      </span>
      <input
			required
			className="profile__input"
			id="email"
			type="email"
			name="email"
			placeholder="E-mail"
			defaultValue="pochta@yandex.ru"
			/>
    </div>
    <span className="profile__error"></span>
    </Form>
    </div>
  );
}

export default Profile;
