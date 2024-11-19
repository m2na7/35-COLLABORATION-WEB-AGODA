import { HOTEL_LIST_DATA } from '@utils/mocks/hotelListData';
import HotelListCard from './components/HotelListCard';
import { cardContainer } from './HotelListPage.style';

const HotelListPage = () => {
  return (
    <section css={cardContainer}>
      {HOTEL_LIST_DATA.data.map((hotel) => (
        <HotelListCard key={hotel.hotelId} hotel={hotel} />
      ))}
    </section>
  );
};

export default HotelListPage;
