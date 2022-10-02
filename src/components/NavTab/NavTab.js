import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid';

function NavTab() {
  const navTabData=[
    {
      id: 1,
      value: 'О проекте',
    },
    {
      id: 2,
      value: 'Технологии',
    },
    {
      id: 3,
      value: 'Студент',
    }
  ]

  const linkMarkup = navTabData.map((i) => (
  <li className="navtab__item" key={uuidv4()}>
    <Link
    activeClass="active"
    to={i.value}
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
    >
    {i.value}
    </Link>
  </li>
  ));

  return (
    <nav className="navtab" id="navbar">
      <ul className="navtab__list">
      {linkMarkup}
      </ul>
    </nav>
  );
}

export default NavTab;
