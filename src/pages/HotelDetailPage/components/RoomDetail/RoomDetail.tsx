import {
  rommDetailOneClickTextStyle,
  roomDetailCardContainer,
  roomDetailCardWrapper,
  roomDetailChipWrapper,
  roomDetailLayout,
  roomDetailNumberTextStyle,
  roomDetailOneClickWrapper,
} from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail.style";
import RoomDetailCard from "@pages/HotelDetailPage/components/RoomDetailCard/RoomDetailCard";
import RoomDetailChip from "@pages/HotelDetailPage/components/RoomDetailChip/RoomDetailChip";
import RoomDetailPriceCard from "@pages/HotelDetailPage/components/RoomDetailPriceCard/RoomDetailPriceCard";

const ROOM_DETAIL_CHIP_DATA = [
  {
    id: 1,
    text: "금연",
    number: "12",
  },
  {
    id: 2,
    text: "조식 포함",
    number: "5",
  },
  {
    id: 3,
    text: "후지불 가능",
    number: "8",
  },
  {
    id: 4,
    text: "예약 무료",
    number: "3",
  },
  {
    id: 5,
    text: "무료 취소",
    number: "1",
  },
];

const ROOM_DETAIL_CARD_PRICE_DATA = [
  {
    id: 1,
    roomName: "더블룸",
    roomCount: 1,
    saleType: "cashback",
    originalPrice: "222,770",
    discountPrice: "166,512",
  },
  {
    id: 2,
    roomName: "트윈룸",
    roomCount: 2,
    saleType: "coupon",
    originalPrice: "212,370",
    discountPrice: "97,345",
  },
];

const RoomDetail = () => {
  return (
    <div css={roomDetailLayout}>
      <section css={roomDetailOneClickWrapper}>
        <span css={rommDetailOneClickTextStyle}>
          원클릭으로 원하는 객실 보기
        </span>
        <div css={roomDetailChipWrapper}>
          {ROOM_DETAIL_CHIP_DATA.map((data) => {
            return (
              <RoomDetailChip
                key={data.id}
                chipText={data.text}
                chipNumber={data.number}
              />
            );
          })}
        </div>
      </section>

      <section css={roomDetailCardContainer}>
        <span css={roomDetailNumberTextStyle}>총 12개 중 12개 객실 보기</span>
        <div css={roomDetailCardWrapper}>
          <div>
            <RoomDetailCard />
            <RoomDetailPriceCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;
