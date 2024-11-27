import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';
import { END_POINT } from '@utils/constants/api/api';
import { queryKey } from '@utils/constants/api/queryKey';
import { HotelListResponse } from '@app-types/hotelList';
import { ApiResponse } from '@app-types/apiResponseType';

const getHotelsList = async (
  cityId: number,
  saleType: 'default' | 'timeLimit'
): Promise<HotelListResponse> => {
  try {
    const response = await instance.get<ApiResponse<HotelListResponse>>(
      END_POINT.GET_HOTELS_LIST(cityId, saleType)
    );

    return response.data.data;
  } catch (error) {
    throw new Error('데이터 패칭 실패');
  }
};

export const useFetchHotelList = (
  cityId: number,
  saleType: 'default' | 'timeLimit'
) => {
  return useQuery({
    queryKey: [queryKey.HOTELS_LIST, cityId],
    queryFn: () => getHotelsList(cityId, saleType),
  });
};
