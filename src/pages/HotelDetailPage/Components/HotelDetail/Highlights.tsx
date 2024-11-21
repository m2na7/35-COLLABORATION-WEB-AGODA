import {
  HighlightsWrapper,
  TitleStyle,
  HighlightsContainer,
  HighlightListStyle,
  ServiceLinkStyle,
} from "./Highlights.style";

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
      <TitleStyle>숙소 하이라이트</TitleStyle>
      <HighlightsContainer>
        <HighlightListStyle>
          {leftItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </HighlightListStyle>
        <HighlightListStyle>
          {rightItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </HighlightListStyle>
      </HighlightsContainer>
      <ServiceLinkStyle href="#">시설/서비스 전체보기 &gt;</ServiceLinkStyle>
    </HighlightsWrapper>
  );
};

export default Highlights;
