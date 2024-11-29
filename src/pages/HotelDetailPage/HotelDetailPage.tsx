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

import { useFetchRoomDetail } from "@apis/hoteldetail/useFetchRoomDetail";
import { useParams } from "react-router-dom";

import RoomDescription from "@pages/HotelDetailPage/components/RoomDescription/RoomDescription";
//import { HotelDetail } from "@app-types/hotelDetail";

const HotelDetailPage = () => {
  const { hotelId } = useParams();
  const { data: roomData } = useFetchRoomDetail(Number(hotelId));
  const rooms = roomData?.rooms || [];
  const handleScrollToTopButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      <RoomDetail roomData={rooms} />
      <RoomDescription handleScrollToTopButtonClick={handleScrollToTopButtonClick}/>
    </div>
  );
};

export default HotelDetailPage;
