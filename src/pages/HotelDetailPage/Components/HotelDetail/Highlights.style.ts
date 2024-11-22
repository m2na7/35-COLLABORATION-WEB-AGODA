import { css, Theme } from "@emotion/react";

export const HighlightsWrapper = css`
  margin: 16px 0;
`;

export const HighlightsHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleStyle = (theme: Theme) => css`
  ${theme.font.title5_b_16};
  color: ${theme.color.black};
  padding: 16px 37px;
`;

export const ServiceStyle = (theme: Theme) => css`
  ${theme.font.title6_b_14};
  color: ${theme.color.gray600};
  text-decoration: none;
  cursor: pointer;
  padding: 17px;
`;

export const HighlightsContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 16px 37px;
  gap: 6px;
`;

export const LeftListStyle = (theme: Theme) => css`
  list-style: none;
  padding: 0;
  margin: 0 16px 0 0;

  li {
    ${theme.font.body2_m_14};
    color: ${theme.color.black};
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
    }
  }
`;

export const RightListStyle = (theme: Theme) => css`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    ${theme.font.body2_m_14};
    color: ${theme.color.black};
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
    }
  }
`;
