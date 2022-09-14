import Title from '../Title/Title';

function AboutMe({id}) {
  const aboutMeTitle = 'Студент';
	const studentName = 'Анна';
	const studentAbout = 'Фронтенд-разработчик, 39 лет';
	const studentDescription = 'Я родилась в Москве, закончила факультет автоматики, телемеханики и связи МИИТ. Долгое время работала инженером в ОАО "РЖД". Люблю путешествовать, животных, увлекаюсь танцами. В программировании меня привлекает почти безграничная возможность постоянно развиваться и узнавать новое. Решилась осуществить мечту - стать цифровым кочевником.';
	const githubData = {
		title: 'Github',
		link: 'https://github.com/annavilnid',
	};
	return (
		<section className="student" id={id}>
			<Title
				className="student__title title"
        value={aboutMeTitle}
			/>
			<div className="student__content">
        <div className="student__photo"/>
				<div className="student___wrapper">
					<h4 className="student__name">
						{studentName}
					</h4>
					<h5 className="student__about">
						{studentAbout}
					</h5>
					<p className="student__background">
						{studentDescription}
					</p>
					<a className="student__github" href={githubData.link}>{githubData.title}</a>
				</div>
			</div>

		</section>
	);
}

export default AboutMe;
