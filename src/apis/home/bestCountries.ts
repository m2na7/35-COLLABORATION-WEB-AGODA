import { useQuery } from '@tanstack/react-query'; 
import { instance } from '@/apis/instance'; 
import { END_POINT } from '@utils/constants/api/api'; 
import { ApiResponse } from '@app-types/apiResponseType';
import { queryKey } from '@utils/constants/api/queryKey';
import { BestCountryResponse } from '@app-types/homeList';

const getBestCountries = async (): Promise<BestCountryResponse> => {
  try {
    const response = await instance.get<ApiResponse<BestCountryResponse>>(
      END_POINT.GET_BEST_LOCATIONS
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('베스트 여행지 데이터를 가져오는데 실패했습니다.');
  }
};


export const useFetchBestCountries = () => {
  return useQuery({
    queryKey: [queryKey.BEST_COUNTRIES], 
    queryFn: getBestCountries,
  });
};
