import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'

function Main() {
  return (
    <div>
      <Promo/>
      <NavTab/>
      <AboutProject
        id="О проекте"
      />
      <Techs
        id="Технологии"
      />
      <AboutMe
        id="Студент"
      />
      <Portfolio/>
    </div>
  );
}

export default Main;
