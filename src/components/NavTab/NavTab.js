import { Link } from 'react-scroll'

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

  const linkMarkup = navTabData.map((i, index) => (
  <li className="navtab__item" key={index}>
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
