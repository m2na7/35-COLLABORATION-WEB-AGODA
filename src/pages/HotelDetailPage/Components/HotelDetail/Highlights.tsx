import {
  HighlightsWrapper,
  HighlightsHeader,
  TitleStyle,
  HighlightsContainer,
  LeftListStyle,
  RightListStyle,
  ServiceStyle,
} from "./Highlights.style";
import IcCheck from "@assets/svg/IcCheck";

const Highlights = () => {
  const leftItems = [
    "예약 무료 취소 가능",
    "대중교통 (410m 거리)",
    "24시간 프런트 데스크",
  ];
  const rightItems = [
    "무료 Wi-Fi (모든 객실)",
    "주차장 | 주차 가능",
    "스파/스팀룸/한증실",
  ];

  return (
    <HighlightsWrapper>
      <HighlightsHeader>
        <TitleStyle>숙소 하이라이트</TitleStyle>
        <ServiceStyle>시설/서비스 전체보기 &gt;</ServiceStyle>
      </HighlightsHeader>
      <HighlightsContainer>
        <LeftListStyle>
          {leftItems.map((item, index) => (
            <li key={index}>
              <IcCheck width="20px" height="20px" /> {item}
            </li>
          ))}
        </LeftListStyle>
        <RightListStyle>
          {rightItems.map((item, index) => (
            <li key={index}>
              <IcCheck width="20px" height="20px" /> {item}
            </li>
          ))}
        </RightListStyle>
      </HighlightsContainer>
    </HighlightsWrapper>
  );
};

export default Highlights;
