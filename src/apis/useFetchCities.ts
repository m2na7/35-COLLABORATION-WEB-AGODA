import { instance } from "@/apis/instance";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "@utils/constants/api/api";

const getCities = async () => {
  try {
    const response = await instance.get(END_POINT.GET_CITIES);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchCities = () => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
};
