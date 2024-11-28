import Highlights from "@pages/HotelDetailPage/components/HotelDetail/Highlights";
import RateReview from "@pages/HotelDetailPage/components/HotelDetail/RateReview";
import Location from "@pages/HotelDetailPage/components/HotelDetail/Location";
import HotelCarousel from "@components/Carousel/HotelCarousel";
import Detail from "@pages/HotelDetailPage/components/HotelDetail/Detail";
import TextReview from "@pages/HotelDetailPage/components/HotelDetail/TextReview";
import Header from "@components/Header/Header";
import HeaderSelection from "@pages/HotelDetailPage/components/HotelDetail/HeaderSelection";
//import { HotelDetail } from "@app-types/hotelDetail";

const HotelDetailPage = () => {
  return (
    <>
      <Header hasBackButton={true} />
      <HeaderSelection />
      <HotelCarousel />
      <Detail />
      <Highlights />
      <RateReview />
      <TextReview />
      <Location />
    </>
  );
};

export default HotelDetailPage;
