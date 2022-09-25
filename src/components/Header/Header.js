import Logo from "../logo/logo";
import {useMediaQuery} from "react-responsive";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { NavLink } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header({handleEditNavigationClic, isLoggedIn, isNavigationOpen, closeAllPopups}) {
  const mobile = useMediaQuery({query: "(max-width: 930px)"});

  const getHeaderSignMarkup = () => (
    <div className="header__sign">
      <NavLink className='header__signup' to="/signup">Регистрация</NavLink>
      <NavLink className='header__signin' to="/signin">Войти</NavLink>
    </div>
	);

  return (
    <header className={isLoggedIn ? 'header header_theme_dark' : 'header'}>
      <div className="header__wrapper">
        <Logo/>
        {isLoggedIn && <Navigation isNavigationOpen={isNavigationOpen} closeAllPopups={closeAllPopups}/>}
        {mobile && isLoggedIn ? <BurgerMenu handleEditNavigationClic={handleEditNavigationClic}/> : <></>}
        {!isLoggedIn && getHeaderSignMarkup() }
      </div>
    </header>
  );
}

export default Header;
