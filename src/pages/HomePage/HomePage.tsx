import { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import ListWithButton from "./components/ListWithButton/ListWithButton";
import Spacing from "./components/Spacing";
import { getBestDestinations } from "@/apis/bestDestination";
import { getPopularCities } from "@/apis/popularCity";
import { BestDestination } from "@/types/bestDestination";
import { PopularCity } from "@/types/popularCity";

const HomePage = () => {
  const [bestDestinations, setBestDestinations] = useState<BestDestination[]>([]);
  const [popularCities, setPopularCities] = useState<PopularCity[]>([]);

  const formattedBestDestinations = bestDestinations.map(item => ({
    id: item.countryId,
    imageUrl: item.countryImage,
    title: item.countryName,
    count: item.hotelCount,
  }));

  const formattedPopularCities = popularCities.map(item => ({
    id: item.cityId,
    imageUrl: item.cityImage,
    title: item.cityName,
    count: item.hotelCount,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bestData = await getBestDestinations();
        setBestDestinations(bestData);

        const popularData = await getPopularCities();
        setPopularCities(popularData);
      } catch (error) {
        console.error("API 호출 실패:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <HomeHeader />
      <ListWithButton title="베스트 여행지" items={formattedBestDestinations} />
      <ListWithButton title="인기 도시" items={formattedPopularCities} />
      <Spacing width={0} height={10} />
    </>
  );
};

export default HomePage;
