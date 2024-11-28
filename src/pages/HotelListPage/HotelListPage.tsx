import { useState } from "react";
import Header from "@components/Header/Header";
import SaleBox from "./components/SaleBox";
import SearchBar from "./components/SearchBar";
import OptionBar from "./components/OptionBar";
import HotelListFooter from "./components/HotelListFooter";
import TimeSaleSection from "./components/TimeSaleSection";
import { HOTEL_LIST_DATA } from "@utils/mocks/hotelListData";
import HotelListCard from "./components/HotelListCard/HotelListCard";
import {
  hotelListHeaderContainer,
  cardWrapper,
  hotelListWrapper,
} from "./HotelListPage.style";


const HotelListPage = () => {
  const queryParams = new URLSearchParams(location.search);
  const cityFromURL = queryParams.get("city");
  const [showTimeSale, setShowTimeSale] = useState(false);
  const [city] = useState(cityFromURL || "");

  const toggleTimeSale = () => {
    setShowTimeSale((prev) => !prev);
  };

  return (
    <>
      <Header hasBackButton={true} />

      <div css={hotelListHeaderContainer}>
        <SearchBar city={city} />
        <OptionBar
          toggleTimeSale={toggleTimeSale}
          showTimeSale={showTimeSale}
        />
      </div>

      <div css={hotelListWrapper}>
        <SaleBox />

        {showTimeSale && <TimeSaleSection />}

        <section css={cardWrapper}>
          {HOTEL_LIST_DATA.data.hotels.map((hotel) => (
            <HotelListCard key={hotel.hotelId} hotel={hotel} />
          ))}
        </section>
      </div>

      <HotelListFooter />
    </>
  );
};

export default HotelListPage;
