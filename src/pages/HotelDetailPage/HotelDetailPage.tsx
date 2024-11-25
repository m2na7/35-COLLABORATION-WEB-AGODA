import Highlights from "./Components/HotelDetail/Highlights";
import RateReview from "./Components/HotelDetail/RateReview";
import Location from "./Components/HotelDetail/Location";
import HotelCarousel from "@components/Carousel/HotelCarousel";
import Detail from "./Components/HotelDetail/Detail";
import TextReview from "./Components/HotelDetail/TextReview";
//import Header from "@components/Header/Header";
import HeaderSelection from "./Components/HotelDetail/HeaderSelection";
import { Vector48 } from "@assets/svg";

const HotelDetailPage = () => {
  return (
    <>
      <HeaderSelection />
      <HotelCarousel />
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
