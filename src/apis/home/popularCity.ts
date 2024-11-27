import { useQuery } from '@tanstack/react-query'; 
import { instance } from '@/apis/instance'; 
import { END_POINT } from '@utils/constants/api/api'; 

const getPopularCities = async () => {
  try {
    const response = await instance.get(END_POINT.GET_POPULAR_CITIES);
    return response.data.data.popularCities;
  } catch (error) {
    console.error(error);
  }
};

export const useFetchPopularCities = () => {
  return useQuery({
    queryKey: ['popularCities'], 
    queryFn: getPopularCities,
  });
};
