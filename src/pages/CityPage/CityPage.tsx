import { useFetchCities } from "@/apis/useFetchCities";
import {
  CityCardWrapper,
  CityPageLayout,
} from "@pages/CityPage/CityPage.style";
import CityCard from "@pages/CityPage/components/CityCard/CityCard";
import CityHeader from "@pages/CityPage/components/CityHeader/CityHeader";

export type CitiesType = {
  cityId: number;
  cityName: string;
  countryName: string;
};

const CityPage = () => {
  const { data } = useFetchCities();

  if (!data) {
    return <div>도시 데이터가 없습니다.</div>;
  }

  return (
    <div css={CityPageLayout}>
      <CityHeader />
      <section css={CityCardWrapper}>
        {data.cities.map((city: CitiesType) => {
          return (
            <CityCard
              key={city.cityId}
              cityName={city.cityName}
              countryName={city.countryName}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CityPage;
