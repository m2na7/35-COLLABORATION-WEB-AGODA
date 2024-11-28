import Carousel from "./Carousel";
import { fakeHotelData } from "../../utils/mocks/fakeHotelData";

const HotelCarousel = () => {
  const { hotelImages } = fakeHotelData;

  return (
    <div>
      <Carousel
        images={hotelImages.map((image) => image.hotelImageUrl)}
        variant="square"
      />
    </div>
  );
};

export default HotelCarousel;
