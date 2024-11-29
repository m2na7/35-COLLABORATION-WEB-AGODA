import Carousel from "./Carousel";
import { hotelImages } from "@app-types/hotelDetail";

interface HotelCarouselProps {
  images: hotelImages[];
}

const HotelCarousel = ({ images }: HotelCarouselProps) => {
  const imageUrls = images ? images.map((image) => image.hotelImageUrl) : [];

  return (
    <div>
      <Carousel images={imageUrls} variant="square" />
    </div>
  );
};

export default HotelCarousel;
