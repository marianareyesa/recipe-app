// components/FeaturedCarousel.js
import Slider from 'react-slick';
import styles from './styles/FeaturedCarousel.module.css'; // Your custom styles

const FeaturedCarousel = ({ carouselData }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // ... other settings you might need
    };

    return (
        <Slider {...settings}>
            {carouselData.map((slide, index) => (
                <div key={index} className={styles.slide}>
                    <div className={styles.imageContainer}>
                        <img src={slide.image} alt={slide.title} className={styles.slideImage} />
                    </div>
                    <div className={styles.textContainer}>
                        <h2 className={styles.title}>{slide.title}</h2>
                        <p className={styles.description}>{slide.description}</p>
                        {/* Additional content */}
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default FeaturedCarousel;