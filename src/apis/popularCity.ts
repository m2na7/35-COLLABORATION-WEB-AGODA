import { END_POINT } from '@utils/constants/api/api';
import { instance } from './instance';

export const getPopularCities = async () => {
  try {
    const response = await instance.get(
      END_POINT.GET_POPULAR_CITIES);

    if (response.data.code === 20000) {
      return response.data.data.popularCities || [];
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('인기 도시 API 호출 실패:', error);
    throw new Error('인기 도시 데이터를 가져오지 못했습니다.');
  }
};