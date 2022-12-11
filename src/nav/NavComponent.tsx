import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faBandcamp, faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './NavComponent.css';

const NavComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid col-8">
                <div className='col-5'><a className="navbar-brand hover-yellow" href="#">Kameron Masullo</a></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between col-7" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <a className="nav-link active hover-yellow" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link active hover-yellow" aria-current="page" href="#">Dev</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link active hover-yellow" aria-current="page" href="#">Music</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link active hover-yellow" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav mb-2 mb-lg-0 hover-yellows'>
                        <li className="nav-item">
                            <a className="nav-link hover-yellow" target='_blank' href="https://github.com/kmasullo-fadv">
                                <FontAwesomeIcon icon={faGithub} size='2x' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover-yellow" target='_blank' href="https://linkedin.com/in/kameron-masullo">
                                <FontAwesomeIcon icon={faLinkedin} size='2x' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover-yellow" target='_blank' href="https://twitter.com/K_m_r_n">
                                <FontAwesomeIcon icon={faTwitter} size='2x' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover-yellow" target='_blank' href="https://kameronmasullo.bandcamp.com/">
                                <FontAwesomeIcon icon={faBandcamp} size='2x' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover-yellow" target='_blank' href="https://open.spotify.com/artist/5G946pHaGg1bWL8UjiZPdB?si=D0iBu9EsTSO5Vr8t-2MYfQ">
                                <FontAwesomeIcon icon={faSpotify} size='2x' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavComponent;