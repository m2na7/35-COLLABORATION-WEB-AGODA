//import { Divider } from "./HotelDetailPage.style";
import Highlights from "./Components/HotelDetail/Highlights";
import RateReview from "./Components/HotelDetail/RateReview";
import Location from "./Components/HotelDetail/Location";
import Carousel from "@components/Carousel/Carousel";
import Detail from "./Components/HotelDetail/Detail";
import TextReview from "./Components/HotelDetail/TextReview";
const HotelDetailPage = () => {
  return (
    <>
      <Carousel images={[]} />
      <Detail />
      <Highlights />
      <TextReview />
      <Location />
      <RateReview />
    </>
  );
};

export default HotelDetailPage;
