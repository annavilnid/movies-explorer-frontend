import { v4 as uuidv4 } from 'uuid';

function Footer() {
  const currentYear = new Date().getFullYear();
	const footerTitle = 'Учебный проект Яндекс.Практикум х BeatFilm.';
  const footerData = [
    {
      id: 1,
      link: "https://praktikum.yandex.ru/",
      value: 'Яндекс.Практикум',
    },
    {
      id: 1,
      link: "https://github.com/annavilnid",
      value: 'Github',

    }
  ]

  const getFooterMarkup = footerData.map((i) => (
    <li className="footer__item" key={uuidv4()}>
      <a href={i.link} target="_blank" rel="noreferrer" className="footer__link">{i.value}</a>
    </li>
	));

  return (
    <section className="footer">
      <p className="footer__text">{footerTitle}</p>
      <div className="footer__nav">
        <ul className="footer__links">
         {getFooterMarkup}
        </ul>
        <p className="footer__copyright">&copy; {currentYear}</p>
      </div>
    </section>
  );
}

export default Footer;
