import Highlights from "./Components/HotelDetail/Highlights";
import RateReview from "./Components/HotelDetail/RateReview";
import Location from "./Components/HotelDetail/Location";
import Carousel from "@components/Carousel/Carousel";
import Detail from "./Components/HotelDetail/Detail";
import TextReview from "./Components/HotelDetail/TextReview";
import { Vector48 } from "@assets/svg";
//import Header from "@components/Header/Header";

const HotelDetailPage = () => {
  return (
    <>
      <Carousel images={[]} />
      <Detail />
      <Highlights />
      <Vector48 />
      <RateReview />
      <Vector48 />
      <TextReview />
      <Vector48 />
      <Location />
    </>
  );
};

export default HotelDetailPage;
