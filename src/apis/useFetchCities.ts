import { get } from "@/apis/instance";
import { QUERY_KEY } from "@/apis/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "@utils/constants/api/api";

export type CitiesGetResponse = {
  cities: CitiesType[];
};

export type CitiesType = {
  cityId: number;
  cityName: string;
  countryName: string;
};

export interface ApiResponseType<T> {
  code: number;
  message: string;
  data: T;
}

const getCities = async (): Promise<CitiesGetResponse> => {
  try {
    const response = await get<ApiResponseType<CitiesGetResponse>>(
      END_POINT.GET_CITIES
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchCities = () => {
  return useQuery({
    queryKey: [QUERY_KEY.CITIES],
    queryFn: getCities,
  });
};
