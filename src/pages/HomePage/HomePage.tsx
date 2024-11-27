import Header from "@components/Header/Header";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import ListWithButton from "./components/ListWithButton/ListWithButton";
import Spacing from "./components/Spacing";
import { useFetchBestLocations } from '@/apis/home/bestLocations';
import { useFetchPopularCities } from "@/apis/home/popularCity";
import { BestDestination } from "@/types/bestDestination";
import { PopularCity } from "@/types/popularCity";

const HomePage = () => {
  const { data: bestDestinations, isLoading: bestDestinationsLoading, error: bestDestinationsError } = useFetchBestLocations();
  const { data: popularCities, isLoading: popularCitiesLoading, error: popularCitiesError } = useFetchPopularCities();

  const formattedBestDestinations = bestDestinations?.map((item: BestDestination) => ({
    id: item.countryId,
    imageUrl: item.countryImage,
    title: item.countryName,
    count: item.hotelCount,
  }));

  const formattedPopularCities = popularCities?.map((item: PopularCity) => ({
    id: item.cityId,
    imageUrl: item.cityImage,
    title: item.cityName,
    count: item.hotelCount,
  }));

  if (bestDestinationsLoading || popularCitiesLoading) {
    return <div>로딩 중</div>;
  }

  if (bestDestinationsError || popularCitiesError) {
    return <div>데이터를 가져오는 데 실패했습니다.</div>;
  }

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
