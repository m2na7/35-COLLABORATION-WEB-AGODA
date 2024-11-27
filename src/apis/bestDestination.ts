import { END_POINT } from '@utils/constants/api/api';
import { instance } from './instance';

export const getBestDestinations = async () => {
  try {
    const response = await instance.get(
      END_POINT.GET_BEST_LOCATIONS);

    if (response.data.code === 20000) {
      return response.data.data.bestCountries || [];
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('베스트 여행지 API 호출 실패:', error);
    throw new Error('베스트 여행지 데이터를 가져오지 못했습니다.');
  }
};
