import { IcCalendar, IcPeople, IcKrw, IcRoom } from "@assets/svg";
import {
  dateSelection,
  headerSelectionWrapper,
  iconWrapper,
} from "@pages/HotelDetailPage/component/HotelDetail/HeaderSelection.style";

const HeaderSelection = () => {
  return (
    <div css={headerSelectionWrapper}>
      <div css={dateSelection}>
        <IcCalendar />
        <span>11월 23일 - 11월 24일</span>
      </div>

      <div css={iconWrapper}>
        <div>
          <IcPeople />
          <span>2</span>
        </div>
        <div>
          <IcRoom />
          <span>1</span>
        </div>
        <div>
          <IcKrw />
        </div>
      </div>
    </div>
  );
};

export default HeaderSelection;
