import { useQuery } from '@tanstack/react-query'; 
import { instance } from '@/apis/instance'; 
import { END_POINT } from '@utils/constants/api/api'; 
import { ApiResponse } from '@app-types/apiResponseType';
import { queryKey } from '@utils/constants/api/queryKey';
import { PopularCityResponse } from '@app-types/homeList';

const getPopularCities = async (): Promise<PopularCityResponse> => {
  try {
    const response = await instance.get<ApiResponse<PopularCityResponse>>(
      END_POINT.GET_POPULAR_CITIES
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('인기 도시 데이터를 가져오는데 실패했습니다.');
  }
};

export const useFetchPopularCities = () => {
  return useQuery({
    queryKey: [queryKey.POPULAR_CITIES], 
    queryFn: getPopularCities,
  });
};