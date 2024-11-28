export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  GET_BEST_LOCATIONS: '/best-locations',
  GET_POPULAR_CITIES: '/popular-cities',
  GET_CITIES: '/cities',
  PATCH_HOTEL_LIKE: (hotelId: number, isLiked: boolean) =>
    `/hotels/likes/${hotelId}?isLiked=${isLiked}`,
  GET_HOTELS_LIST: (cityId: number, saleType: 'default' | 'timeLimit') =>
    `/hotels?cityId=${cityId}&saleType=${saleType}`,
  GET_HOTEL_DETAIL: (hotelId: number) => `/hotels/${hotelId}/details`,
  GET_HOTEL_ROOMS: (hotelId: number) => `/hotels/${hotelId}/rooms`,
} as const;
