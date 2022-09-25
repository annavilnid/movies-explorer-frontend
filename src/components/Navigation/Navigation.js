import NavItem from '../NavItem/NavItem';
import {useMediaQuery} from "react-responsive";
import profile from '../../images/profile.svg';
import { useLocation } from 'react-router-dom';

function Navigation({isNavigationOpen,closeAllPopups}) {
  const mobile = useMediaQuery({query: "(max-width: 930px)"});
  const location = useLocation();

  const profileLinkMarkup = <><p className='profile-link__label'>Аккаунт</p><img className='profile-linknk__image' src={profile} alt="иконка юзера"/></>

  return (
    <nav className={`navigation ${isNavigationOpen && 'navigation_is-opened'}`}>
      <div className={`navigation__wrapper ${isNavigationOpen && 'navigation__wrapper_is-opened'}`}>
        {mobile && <button className='navigation__close-button' onClick={closeAllPopups}></button>}
        {mobile && <NavItem className={`navigation__item ${(location.pathname === '/') && 'navigation__item_active'}`}  to="/" closeAllPopups={closeAllPopups} value={'Главная'}/>}
        <NavItem className={`navigation__item ${(location.pathname === '/movies') && 'navigation__item_active'}`} to="/movies" closeAllPopups={closeAllPopups} value={'Фильмы'}/>
        <NavItem className={`navigation__item ${(location.pathname === '/saved-movies') && 'navigation__item_active'}`} to="/saved-movies" closeAllPopups={closeAllPopups} value={'Сохранённые фильмы'}/>
        <NavItem
        className='navigation__profile-link profile-link'
        to="/profile"
        closeAllPopups={closeAllPopups}
        value={profileLinkMarkup}/>
      </div>
    </nav>
  );
}

export default Navigation;
