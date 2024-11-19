import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./Carousel.styles";

//고정될 사진들
import fix1 from "../../assets/img/fix-1.jpg";
import fix2 from "../../assets/img/fix-2.jpg";
import fix3 from "../../assets/img/fix-3.jpg";
import fix4 from "../../assets/img/fix-4.jpg";

// 썸네일 Props
interface CarouselProps {
  thumbnail: string;
}

const Carousel: React.FC<CarouselProps> = ({ thumbnail }) => {
  const images = [thumbnail, fix1, fix2, fix3, fix4];

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
