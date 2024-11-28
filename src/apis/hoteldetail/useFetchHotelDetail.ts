import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";
import { END_POINT } from "@utils/constants/api/api";

const getHotelDetail = async () => {
  try {
    const response = await instance.get(END_POINT.GET_HOTEL_DETAIL(1));
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const useFetchHotelDetail = () => {
  return useQuery({
    queryKey: [],
    queryFn: getHotelDetail,
  });
};
