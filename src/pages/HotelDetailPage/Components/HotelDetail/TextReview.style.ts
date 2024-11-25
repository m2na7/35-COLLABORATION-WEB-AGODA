import { css, Theme } from "@emotion/react";

export const reviewsWrapper = css`
  width: 100%;
  padding: 2rem;
  margin-top: 3.8rem;
`;

export const reviewsHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font.title5_b_16}
  color: ${theme.color.black};
`;

export const detailLink = (theme: Theme) => css`
  ${theme.font.title6_b_14}
  color: ${theme.color.gray600};
`;

export const reviewList = css`
  display: flex;
  gap: 1.6rem;
  overflow-x: auto;
  padding-bottom: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    flex-shrink: 0;
    width: 230px;
  }
`;

export const reviewItem = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: ${theme.color.gray100};
  border-radius: 8px;
`;

export const reviewTitle = (theme: Theme) => css`
  ${theme.font.detail2_b_12}
  color: ${theme.color.blue200};
`;

export const ratingWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    ${theme.font.detail5_m_10}
    color: ${theme.color.gray700};
  }
`;

export const reviewContent = (theme: Theme) => css`
  ${theme.font.body4_m_12}
  color: ${theme.color.black};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
