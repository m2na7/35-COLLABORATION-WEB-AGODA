import Highlights from "@pages/HotelDetailPage/components/HotelDetail/Highlights";
import RateReview from "@pages/HotelDetailPage/components/HotelDetail/RateReview";
import Location from "@pages/HotelDetailPage/components/HotelDetail/Location";
import HotelCarousel from "@components/Carousel/HotelCarousel";
import Detail from "@pages/HotelDetailPage/components/HotelDetail/Detail";
import TextReview from "@pages/HotelDetailPage/components/HotelDetail/TextReview";
import Header from "@components/Header/Header";
import HeaderSelection from "@pages/HotelDetailPage/components/HotelDetail/HeaderSelection";
import RoomDetail from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail";
import {
  HotelDetailContainer,
  HotelDetailLayout,
} from "@pages/HotelDetailPage/HotelDetailPage.style";
//import { HotelDetail } from "@app-types/hotelDetail";

const HotelDetailPage = () => {
  return (
    <div css={HotelDetailLayout}>
      <div css={HotelDetailContainer}>
        <Header hasBackButton={true} />
        <HeaderSelection />
        <HotelCarousel />
        <Detail />
        <Highlights />
        <RateReview />
        <TextReview />
        <Location />
      </div>

      <RoomDetail />
    </div>
  );
};

export default HotelDetailPage;
