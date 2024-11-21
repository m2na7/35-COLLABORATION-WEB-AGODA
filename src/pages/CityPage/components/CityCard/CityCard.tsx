import { cityCardChipStyle, cityCardChipWrapper, cityCardLayout, cityCardsubTitleStyle, cityCardTitleStyle, cityCardTitleWrapper } from "@pages/CityPage/components/CityCard/CityCard.style";

const CityCard = () => {
  return (
    <div css={cityCardLayout}>
      <div css={cityCardTitleWrapper}>
        <span css={cityCardTitleStyle}>제주</span>
        <span css={cityCardsubTitleStyle}>도시: 제주, 대한민국</span>
      </div>
      <div css={cityCardChipWrapper}>
        <span css={cityCardChipStyle}>도시</span>
      </div>
    </div>
  );
};

export default CityCard;
