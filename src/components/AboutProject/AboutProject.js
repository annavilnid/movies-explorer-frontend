import Title from "../Title/Title";

function AboutProject({id}) {
  const aboutProjectTitle = 'О проекте';
  const aboutProjectData = [
		{
			id: 1,
      title: 'Дипломный проект включал 5 этапов',
			about: 'Составление плана, работу над бэкендом,вёрстку, добавление функциональности и финальные доработки.',
		},
		{
      id: 2,
			title: 'На выполнение диплома ушло 5 недель',
			about: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
		},
	];
	const getArticlesContent = aboutProjectData.map((i, index) => (
		<div className="about-project__article article" key={index}>
			<h3 className="article__title">{i.title}</h3>
		  <p className="article__text">{i.about}</p>
		</div>
	));
	return (
		<section className="about-project" id={id}>
			<Title
      className="about-project__title title"
      value={aboutProjectTitle}
      />
			<div className="about-project__section">
				{getArticlesContent}
			</div>
			<div className="about-project__progress progress">
					<div className="about-project__wrapper about-project__wrapper_color_green">
            <p className="progress__part progress__part_color_green">
						1 неделя
					  </p>
          </div>
          <div className="about-project__wrapper about-project__wrapper_color_gray">
            <p className="progress__part progress__part_color_gray">
						4 недели
					  </p>
          </div>
					<div className="about-project__wrapper">
            <p className="progress__part">
						Back-end
					  </p>
          </div>
					<div className="about-project__wrapper">
            <p className="progress__part">
						Front-end
					  </p>
          </div>
			</div>
		</section>
  );
}

export default AboutProject;
