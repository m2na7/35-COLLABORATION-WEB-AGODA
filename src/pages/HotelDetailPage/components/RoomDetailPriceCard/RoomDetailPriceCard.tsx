import { priceCardLayout } from "@pages/HotelDetailPage/components/RoomDetailPriceCard/RoomDetailPriceCard.style";

const RoomDetailPriceCard = () => {
  return (
    <section css={priceCardLayout}>
      <div>
        <div>
          <span>더블룸</span>
          <span>예약 가능한 객실 1개</span>
        </div>

        <div>
          <span>캐시백 ₩ 32,995 자동 적용</span>
          <span>₩ 222,770</span>
          <span>₩ 166,512</span>
          <span>1박당 요금 (세금 및 봉사료 제외)</span>
        </div>
      </div>

      <div>
        <span>객실 정보 자세히 보기</span>
        <button>장바구니</button>
        <button>지금 예약하기</button>
      </div>
    </section>
  );
};

export default RoomDetailPriceCard;
