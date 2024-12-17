import Slider from 'react-slick';
import {Link} from "react-router-dom";
import {albumSlides} from "./albumSlides.ts";
import './albums.css';
import {carouselSettings, ICarouselSlide} from "../common/carousel/carouselConfig.ts";

const Albums = () => {

    const renderAlbumSlide = (slide: ICarouselSlide) => (
        <Link key={`album-${slide.id}`} className={'no-dec-link'} to={slide.link ?? ''} target="_blank"
              rel="noopener noreferrer">
            <div className={'album'}>
                <img src={slide.img} alt={`${slide.title} Album Cover`} className={'album-image'}/>
                <h4>{slide.title}</h4>
                <p>{slide.description}</p>
            </div>
        </Link>
    );

    return (
        <div className={'albums component-parent'}>
            <div className={'flex-col flex-justify-center flex-align-center'}>
                <h2>Albums, EPs and Singles</h2>
                <div className={'albums-container'}>
                    <div className={'slider-container'}>
                        <Slider {...carouselSettings}>
                            {
                                albumSlides.map(renderAlbumSlide)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Albums;