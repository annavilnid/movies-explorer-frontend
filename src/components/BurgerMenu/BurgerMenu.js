function BurgerMenu({handleEditNavigationClic}) {

  return (
    <div className='header__menu menu'>
      <button className='menu__button' onClick={handleEditNavigationClic}></button>
    </div>
  );
}

export default BurgerMenu;
