import { IcBackWhite, IcCancle, IcSearch } from "@assets/svg";
import {
  cityHeaderBackIconStyle,
  cityHeaderCancleIconStyle,
  cityHeaderInputStyle,
  cityHeaderInputWrapper,
  cityHeaderLayout,
  cityHeaderSearchIconStyle,
  cityHeaderTitleStyle,
  cityHeaderTitleWrapper,
} from "@pages/CityPage/components/CityHeader/CityHeader.style";

const CityHeader = () => {
  return (
    <header css={cityHeaderLayout}>
      <div css={cityHeaderTitleWrapper}>
        <IcBackWhite css={cityHeaderBackIconStyle} />
        <span css={cityHeaderTitleStyle}>여행지 선택</span>
      </div>

      <div css={cityHeaderInputWrapper}>
        <IcSearch css={cityHeaderSearchIconStyle} />
        <input
          placeholder="도시, 숙소명, 관광 또는 여행지"
          css={cityHeaderInputStyle}
        />
        <IcCancle css={cityHeaderCancleIconStyle} />
      </div>
    </header>
  );
};

export default CityHeader;
