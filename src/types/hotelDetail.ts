export interface HotelDetail {
  hotelId: number;
  isLiked: boolean;
  hotelName: string;
  star: number;
  reservationCount: number;
  hotelImages?: hotelImages;
}

export interface hotelImages {
  hotelImageId: number;
  hotelImageUrl: string;
}
