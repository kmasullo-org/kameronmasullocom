import SocialBar from "../socialbar/SocialBar.tsx";
import Logo from '../../../public/images/logo.png';
import './topBar.css';

const TopBar = () => {
  return (
      <div className={'top-bar component-parent'}>
          {!Logo
              ? <h1>Kameron Masullo</h1>
              : <img className={'top-bar-logo'} src={Logo} alt={'Kameron Masullo'}/>
          }
          <h5>Musician • Composer • Guitarist • Mix Engineer</h5>
          <SocialBar/>
      </div>
  )
};

export default TopBar;