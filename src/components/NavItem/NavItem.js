import { NavLink } from "react-router-dom";

function NavItem({value, to, className, closeAllPopups}) {

  return (
    <NavLink className={className} to={to} onClick={closeAllPopups}>{value}</NavLink>
  );
}

export default NavItem;
