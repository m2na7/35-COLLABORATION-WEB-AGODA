import styled from "@emotion/styled";

export const RateReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 37px;
  background-color: #fff;
`;

export const RateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TitleStyle = styled.h3`
  ${({ theme }) => theme.font.title5_b_16};
  color: ${({ theme }) => theme.color.black};
`;

export const DetailLink = styled.a`
  ${({ theme }) => theme.font.title6_b_14};
  color: ${({ theme }) => theme.color.gray600};
  text-decoration: none;
`;

export const CircleEvaluationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px; /* 간격을 조절할 수 있습니다 */
`;

export const CircleContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

export const RectangleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 20px;
  z-index: 0;
`;

export const CircleWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const RateText = styled.div`
  position: absolute;
  z-index: 2;
  text-align: center;

  span {
    ${({ theme }) => theme.font.title6_b_14};
    color: ${({ theme }) => theme.color.gray700};
    display: block;
  }

  strong {
    ${({ theme }) => theme.font.title2_sb_20};
    color: ${({ theme }) => theme.color.blue300};
  }
`;

export const EvaluationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EvaluationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    ${({ theme }) => theme.font.detail2_b_12};
    color: ${({ theme }) => theme.color.gray800};
    flex: 1;
    text-align: right;
    margin-right: 6px;
  }
`;

export const ProgressBarWrapper = styled.div`
  flex: 2;
  display: flex;
  position: relative;
  height: 8px;
  background-color: ${({ theme }) => theme.color.gray200};
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBarBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.gray200};
  }
`;

export const ProgressBarForeground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: transparent;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.blue300};
  }
`;
