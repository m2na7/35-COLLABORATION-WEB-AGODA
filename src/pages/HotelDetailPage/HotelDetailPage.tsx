import { Divider } from "./HotelDetailPage.style";
import Highlights from "./Components/HotelDetail/Highlights";
import RateReview from "./Components/HotelDetail/RateReview";
import Location from "./Components/HotelDetail/Location";

const HotelDetailPage = () => {
  return (
    <>
      <Highlights />
      <Divider />
      <RateReview />
      <Divider />
      <Location />
    </>
  );
};

export default HotelDetailPage;
