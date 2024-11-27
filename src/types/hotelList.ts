export interface HotelList {
  hotelId: number;
  hotelName: string;
  star: number;
  hotelDistrict: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  discountPrice: number;
  taxPrice: number;
  isLiked: boolean;
  isQuarterDiscount: boolean;
  hotelImage?: string;
  isTimeSale: boolean;
}

export interface HotelListResponse {
  hotels: HotelList[];
}
