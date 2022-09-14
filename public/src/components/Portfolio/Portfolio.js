function Portfolio () {
  const portfolioData = [
		{
      id: 1,
			title: 'Статичный сайт',
			link: 'https://annavilnid.github.io/how-to-learn/',
		},
		{
      id: 2,
			title: 'Адаптивный сайт',
			link: 'https://annavilnid.github.io/russian-travel/',
		},
		{
      id: 3,
			title: 'Одностраничное приложение',
			link: 'https://test.nomoredomains.sbs/',
		},
	];

  const getLinkMarkup = portfolioData.map((i, index) => (
    <li className="portfolio__item" key={index}>
      <a href={i.link} target="_blank" rel="noreferrer" className="portfolio__link">{i.title}</a>
    </li>
	));
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__links">
        {getLinkMarkup}
      </ul>
    </section>
  );
}

export default Portfolio ;
