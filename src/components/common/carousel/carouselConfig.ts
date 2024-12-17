export interface ICarouselSlide {
    id: string,
    img?: string,
    title?: string,
    description?: string,
    link?: string
}

export const carouselSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1070,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}