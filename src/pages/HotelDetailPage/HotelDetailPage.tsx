import { useParams } from "react-router-dom";

import Header from "@components/Header/Header";
import Highlights from "@pages/HotelDetailPage/components/HotelDetail/Highlights";
import RateReview from "@pages/HotelDetailPage/components/HotelDetail/RateReview";
import Location from "@pages/HotelDetailPage/components/HotelDetail/Location";
import HotelCarousel from "@components/Carousel/HotelCarousel";
import Detail from "@pages/HotelDetailPage/components/HotelDetail/Detail";
import TextReview from "@pages/HotelDetailPage/components/HotelDetail/TextReview";
import HeaderSelection from "@pages/HotelDetailPage/components/HotelDetail/HeaderSelection";
import RoomDetail from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail";
import {
  HotelDetailContainer,
  HotelDetailLayout,
} from "@pages/HotelDetailPage/HotelDetailPage.style";
import { useFetchHotelDetail } from "@apis/hoteldetail/useFetchHotelDetail";

const HotelDetailPage = () => {
  const { hotelId } = useParams();
  const { data: hotelDetail, isLoading: hotelDetailLoading } =
    useFetchHotelDetail(Number(hotelId));

  // 로딩 중 처리
  if (hotelDetailLoading) {
    return <div>Loading...</div>;
  }

  if (!hotelDetail || !hotelDetail.hotelImages) {
    return <div>No images available</div>;
  }

  return (
    <div css={HotelDetailLayout}>
      <div css={HotelDetailContainer}>
        <Header hasBackButton={true} />
        <HeaderSelection />
        <HotelCarousel images={hotelDetail.hotelImages} />
        <Detail
          hotelName={hotelDetail.hotelName}
          reservationCount={hotelDetail.reservationCount}
        />
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
