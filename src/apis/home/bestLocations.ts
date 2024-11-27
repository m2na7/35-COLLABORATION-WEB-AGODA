import { useQuery } from '@tanstack/react-query'; 
import { instance } from '@/apis/instance'; 
import { END_POINT } from '@utils/constants/api/api'; 

const getBestDestinations = async () => {
  try {
    const response = await instance.get(END_POINT.GET_BEST_LOCATIONS);
    return response.data.data.bestCountries;
  } catch (error) {
    console.error(error);
  }
};

export const useFetchBestLocations = () => {
  return useQuery({
    queryKey: ['bestDestinations'], 
    queryFn: getBestDestinations,
  });
};
