import { get } from "@/apis/instance";
import { QUERY_KEY } from "@/apis/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "@utils/constants/api/api";

const getCities = async () => {
  try {
    const response = await get(END_POINT.GET_CITIES);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useFetchCities = () => {
  return useQuery({
    queryKey: [QUERY_KEY.CITIES],
    queryFn: getCities,
  });
};
