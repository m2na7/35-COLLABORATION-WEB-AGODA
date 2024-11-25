import Highlights from "./Components/HotelDetail/Highlights";
import RateReview from "./Components/HotelDetail/RateReview";
import Location from "./Components/HotelDetail/Location";
import Carousel from "@components/Carousel/Carousel";
import Detail from "./Components/HotelDetail/Detail";
import TextReview from "./Components/HotelDetail/TextReview";
import { Vector48 } from "@assets/svg";

const HotelDetailPage = () => {
  return (
    <>
      <Carousel images={[]} />
      <Detail />
      <Vector48 />
      <Highlights />
      <Vector48 />
      <TextReview />
      <Vector48 />
      <Location />
      <Vector48 />
      <RateReview />
    </>
  );
};

export default HotelDetailPage;
