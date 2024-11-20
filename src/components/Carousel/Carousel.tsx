import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./Carousel.styles";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!sliderRef.current) return;

    if (e.deltaX > 50) {
      sliderRef.current.slickNext();
    } else if (e.deltaX < -50) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div css={styles.carouselContainer} onWheel={handleWheel}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} css={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
