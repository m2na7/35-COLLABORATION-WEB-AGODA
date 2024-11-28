import { useFetchHotelDetail } from "@/apis/hoteldetail/useFetchHotelDetail";
import Carousel from "./Carousel";

const HotelCarousel = () => {
  const { data, isLoading, isError } = useFetchHotelDetail();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading hotel data.</div>;
  }

  const hotelImages =
    data?.hotelImages?.map(
      (image: { hotelImageUrl: string }) => image.hotelImageUrl
    ) || [];

  return (
    <div>
      <Carousel images={hotelImages} />
    </div>
  );
};

export default HotelCarousel;
