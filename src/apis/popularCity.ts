import { END_POINT } from '@utils/constants/api/api';
import { instance } from './instance';

export const getPopularCities = async () => {
  try {
    const response = await instance.get(END_POINT.GET_POPULAR_CITIES);

    if (response.data.code === 20000) {
      return response.data.data.popularCities || [];
    }

    throw new Error(getErrorMessage(response.data.code));

  } catch (error) {
    console.error('인기 도시 API 호출 실패:', error);

    // error가 Error 객체일 때만 message에 접근
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('인기 도시 데이터를 가져오지 못했습니다.');
  }
};

const getErrorMessage = (code: number) => {
  switch (code) {
    case 40000:
      return '잘못된 요청입니다.';
    case 40005:
      return 'json 오류 혹은 request body 필드 오류입니다.';
    case 40400:
      return '대상을 찾을 수 없습니다.';
    case 40401:
      return '잘못된 API입니다.';
    case 40402:
      return '인기 도시를 찾을 수 없습니다.';
    case 40500:
      return '잘못된 HTTP method 요청입니다.';
    case 50000:
      return '서버 내부 오류입니다.';
    default:
      return '알 수 없는 오류가 발생했습니다.';
  }
};
