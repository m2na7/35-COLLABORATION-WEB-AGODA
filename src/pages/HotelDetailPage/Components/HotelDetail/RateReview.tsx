import {
  RateReviewWrapper,
  RateHeader,
  TitleStyle,
  DetailLink,
  CircleEvaluationContainer,
  CircleContainer,
  EvaluationList,
  EvaluationItem,
  ProgressBarWrapper,
  ProgressBarBackground,
  ProgressBarForeground,
  RectangleBackground,
  CircleWrapper,
  RateText,
} from "./RateReview.style";
import { Ellipse27, Ellipse28 } from "@assets/svg";
import { ProgressingBar, ProgressingBarBlue } from "@assets/svg";

const RateReview = () => {
  const Rate = {
    score: 8.3,
    label: "우수",
  };

  const Evaluations = [
    { label: "숙소 청결 상태", progress: 0.8 },
    { label: "부대시설", progress: 0.7 },
    { label: "위치", progress: 0.9 },
    { label: "서비스", progress: 0.85 },
    { label: "가격대비 만족도", progress: 0.75 },
  ];

  return (
    <RateReviewWrapper>
      <RateHeader>
        <TitleStyle>평가</TitleStyle>
        <DetailLink>자세히 보기 &gt;</DetailLink>
      </RateHeader>

      <CircleEvaluationContainer>
        <CircleContainer>
          <RectangleBackground />
          <CircleWrapper>
            <Ellipse28 />
            <Ellipse27 />
            <RateText>
              <span>{Rate.label}</span>
              <strong>{Rate.score}</strong>
            </RateText>
          </CircleWrapper>
        </CircleContainer>

        <EvaluationList>
          {Evaluations.map((evaluation, index) => (
            <EvaluationItem key={index}>
              <span>{evaluation.label}</span>
              <ProgressBarWrapper>
                <ProgressBarBackground>
                  <ProgressingBar />
                </ProgressBarBackground>
                <ProgressBarForeground
                  style={{ width: `${evaluation.progress * 100}%` }}
                >
                  <ProgressingBarBlue />
                </ProgressBarForeground>
              </ProgressBarWrapper>
            </EvaluationItem>
          ))}
        </EvaluationList>
      </CircleEvaluationContainer>
    </RateReviewWrapper>
  );
};

export default RateReview;
