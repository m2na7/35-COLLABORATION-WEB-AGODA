import { IcCart2, IcTicketGreen } from "@assets/svg";
import {
  buyButtonStyle,
  cardButtonIcon,
  cardButtonWrapper,
  cartButtonStyle,
  detailInfoButtonStyle,
  discountPriceTextStyle,
  originalPriceTextStyle,
  priceCardButtonContainer,
  priceCardInfoContainer,
  priceCardInfoLabelIconStyle,
  priceCardInfoLabelTextStyle,
  priceCardInfoLabelWrapper,
  priceCardInfoLeftWrapper,
  priceCardInfoRightWrapper,
  priceCardInfoText,
  priceCardInfoTitle,
  priceCardLayout,
  priceInfoTextStyle,
  PriceInfoWrapper,
} from "@pages/HotelDetailPage/components/RoomDetailPriceCard/RoomDetailPriceCard.style";

const RoomDetailPriceCard = () => {
  return (
    <section css={priceCardLayout}>
      <section css={priceCardInfoContainer}>
        <div css={priceCardInfoLeftWrapper}>
          <span css={priceCardInfoTitle}>더블룸</span>
          <span css={priceCardInfoText}>예약 가능한 객실 1개</span>
        </div>

        <div css={priceCardInfoRightWrapper}>
          <div css={priceCardInfoLabelWrapper}>
            <IcTicketGreen css={priceCardInfoLabelIconStyle} />
            <span css={priceCardInfoLabelTextStyle}>
              캐시백 ₩ 32,995 자동 적용
            </span>
          </div>

          <div css={PriceInfoWrapper}>
            <span css={originalPriceTextStyle}>₩ 222,770</span>
            <span css={discountPriceTextStyle}>₩ 166,512</span>
            <span css={priceInfoTextStyle}>
              1박당 요금 (세금 및 봉사료 제외)
            </span>
          </div>
        </div>
      </section>

      <section css={priceCardButtonContainer}>
        <span css={detailInfoButtonStyle}>객실 정보 자세히 보기</span>
        <div css={cardButtonWrapper}>
          <button css={cartButtonStyle}>
            <IcCart2 css={cardButtonIcon} />
          </button>
          <button css={buyButtonStyle}>지금 예약하기</button>
        </div>
      </section>
    </section>
  );
};

export default RoomDetailPriceCard;
