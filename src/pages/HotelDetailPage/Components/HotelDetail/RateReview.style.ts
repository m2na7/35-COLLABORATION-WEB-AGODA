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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const EvaluationItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-right: 1.2rem;
    ${theme.font.detail2_b_12};
    text-align: right;
    flex-grow: 1;
  }
`;

export const ProgressBarWrapper = (theme: Theme) => css`
  width: 12.1rem;
  height: 0.6rem;
  display: flex;
  position: relative;
  background-color: ${theme.color.gray200};
  border-radius: 10rem;
  overflow: hidden;
`;

export const ProgressBarForeground = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${theme.color.blue300};
  border-radius: 0.4rem;
`;
