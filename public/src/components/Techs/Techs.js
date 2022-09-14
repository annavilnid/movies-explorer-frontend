import Title from "../Title/Title";
import { useMediaQuery } from 'react-responsive';

function Techs({id}) {
  const mobile = useMediaQuery({query: "(max-width: 747px)"});
  const techsTitle = 'Технологии';
  const techsSubtitle = '7 технологий';
	const techsAbout = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.';
	const techData = [
		{
      id: 1,
			title: 'HTML',
		},
		{
      id: 2,
			title: 'CSS',
		},
		{
      id: 3,
			title: 'JS',
		},
		{
      id: 4,
			title: 'React',
		},
		{
      id: 5,
			title: 'Git',
		},
		{
      id: 6,
			title: 'Express.js',
		},
		{
      id: 7,
			title: 'mongoDB',
		},
	];
  const techDataList = techData.map((i, index) => (
			<li className="techs__item" key={index}>{i.title}</li>
	));
  return (
    <section className='techs' id={id}>
      <Title
      className={`title ${mobile && 'title_theme_dark'} techs__title`}
      value={techsTitle}
      />
      <h2 className='techs__subtitle'>{techsSubtitle}</h2>
      <p className='techs__about'>{techsAbout}</p>
      <ul className="techs__list">
      {techDataList}
      </ul>
    </section>
  );
}

export default Techs;
