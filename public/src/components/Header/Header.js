import Logo from "../logo/logo";
import { useLocation } from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { NavLink } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header({handleEditNavigationClic, isNavigationOpen, closeAllPopups}) {
  const location = useLocation();
  const mobile = useMediaQuery({query: "(max-width: 930px)"});

  const getHeaderSignMarkup = () => (
    <div className="header__sign">
      <NavLink className='header__signup' to="/signup">Регистрация</NavLink>
      <NavLink className='header__signin' to="/signin">Войти</NavLink>
    </div>
	);

  return (
    <header className={(location.pathname === '/') ? 'header' : 'header header_theme_dark'}>
      <div className="header__wrapper">
        <Logo/>
        {(location.pathname !== '/') && <Navigation isNavigationOpen={isNavigationOpen} closeAllPopups={closeAllPopups}/>}
        {mobile && location.pathname !== '/' ? <BurgerMenu handleEditNavigationClic={handleEditNavigationClic}/> : <></>}
        {(location.pathname === '/') && getHeaderSignMarkup() }
      </div>
    </header>
  );
}

export default Header;
