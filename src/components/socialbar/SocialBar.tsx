import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify, faFacebook, faBandcamp, faApple } from '@fortawesome/free-brands-svg-icons';
import './socialBar.css';

const SocialBar = () => {

    const renderButton = (icon: any) => (
        <button className={'social-button'}>
            <FontAwesomeIcon icon={icon} size={'2x'}/>
        </button>
    )

    return (
        <div className={'social-bar'}>
            { renderButton(faSpotify) }
            { renderButton(faBandcamp) }
            { renderButton(faApple) }
            { renderButton(faFacebook) }
            { renderButton(faInstagram) }
        </div>
    );
}

export default SocialBar;