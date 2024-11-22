import { css, Theme } from "@emotion/react";

export const RateReviewWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 16px 37px;
  background-color: #fff;
`;

export const RateHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TitleStyle = (theme: Theme) => css`
  ${theme.font.title5_b_16};
  color: ${theme.color.black};
`;

export const DetailLink = (theme: Theme) => css`
  ${theme.font.title6_b_14};
  color: ${theme.color.gray600};
  text-decoration: none;
`;

export const CircleEvaluationContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const CircleContainer = css`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

export const RectangleBackground = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  background-color: ${theme.color.gray100};
  border-radius: 20px;
  z-index: 0;
`;

export const CircleWrapper = css`
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

export const RateText = (theme: Theme) => css`
  position: absolute;
  z-index: 2;
  text-align: center;

  span {
    ${theme.font.title6_b_14};
    color: ${theme.color.gray700};
    display: block;
  }

  strong {
    ${theme.font.title1_sb_26};
    color: ${theme.color.blue300};
  }
`;

export const EvaluationList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EvaluationItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -10px;

  span {
    color: var(--mobile_web_3-grayscale-gray800, #3c3b43);
    font-family: "Apple SD Gothic Neo";
    font-size: 12px;
    text-align: left;
    font-weight: bold;
    margin-right: 12px;
    ${theme.font.detail2_b_12};
  }
`;

export const ProgressBarWrapper = (theme: Theme) => css`
  width: 121px;
  height: 6px;
  display: flex;
  position: relative;
  background-color: ${theme.color.gray200};
  border-radius: 100px;
  overflow: hidden;
`;

export const ProgressBarForeground = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${theme.color.blue300};
  border-radius: 4px;
`;
