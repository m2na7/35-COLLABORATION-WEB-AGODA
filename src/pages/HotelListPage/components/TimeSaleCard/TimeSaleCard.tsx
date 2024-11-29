import { IcMap } from "@assets/svg";
import StarRating from "@components/StarRating/StarRating";
import { iconStyle } from "@styles/iconStyles";
import {
  timeSaleCardWrapper,
  timeSaleDescriptionWrapper,
  timeSaleDetailWrapper,
  timeSaleTitle,
  timeSaleInfoWrapper,
  timeSaleImage,
  timeSalePrice,
  timeSaleLocation,
  timeSaleRating,
} from "./TimeSaleCard.style";
import { useNavigate } from "react-router-dom";
import routePath from "@routes/routePath";

interface TimeSaleCardProps {
  hotel: {
    hotelId: number;
    hotelName: string;
    star: number;
    hotelDistrict: string;
    rating: number;
    discountPrice: number;
    hotelImage?: string;
  };
}

const TimeSaleCard = ({ hotel }: TimeSaleCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = (hotelId: number) => {
    navigate(routePath.HOTEL_DETAIL.replace(":hotelId", String(hotelId)));
  };

  return (
    <article css={timeSaleCardWrapper} onClick={() => handleCardClick(hotel.hotelId)}>
      <div>
        <img
          src={hotel.hotelImage ?? "https://placehold.co/144x180"}
          css={timeSaleImage}
        />
      </div>

      <div css={timeSaleDescriptionWrapper}>
        <div css={timeSaleDetailWrapper}>
          <h3 css={timeSaleTitle}>{hotel.hotelName}</h3>

          <StarRating rating={hotel.star} variant="default" />

          <div css={timeSaleInfoWrapper}>
            <div css={timeSaleLocation}>
              <IcMap css={iconStyle(1.2, 2)} />
              <p>{hotel.hotelDistrict}</p>
            </div>

            <p css={timeSaleRating}>{hotel.rating}</p>
          </div>
        </div>

        <p css={timeSalePrice}>₩ {hotel.discountPrice.toLocaleString()}</p>
      </div>
    </article>
  );
};

export default TimeSaleCard;
