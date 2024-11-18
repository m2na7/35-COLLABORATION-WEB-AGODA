import React, { useState } from "react";
import * as styles from "./Carousel.styles";

import fix1 from "../../assets/img/fix-1.jpg";
import fix2 from "../../assets/img/fix-2.jpg";
import fix3 from "../../assets/img/fix-3.jpg";
import fix4 from "../../assets/img/fix-4.jpg";

const Carousel = () => {
  const images = [fix1, fix2, fix3, fix4];
  const [currentImg, setCurrentImg] = useState(0);

  // 터치패드
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaX > 50 && currentImg < images.length - 1) {
      // 오른쪽 스크롤: 다음 이미지로 이동
      setCurrentImg((prevIndex) => prevIndex + 1);
    } else if (e.deltaX < -50 && currentImg > 0) {
      // 왼쪽 스크롤: 이전 이미지로 이동
      setCurrentImg((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div css={styles.carouselContainer}>
      <div css={styles.imageSlider} onWheel={handleWheel}>
        <div
          css={styles.imageTrack(currentImg, images.length)}
          style={{ transform: `translateX(-${currentImg * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>

      <div css={styles.dots}>
        {images.map((_, index) => (
          <span key={index} css={styles.dot(index === currentImg)}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
