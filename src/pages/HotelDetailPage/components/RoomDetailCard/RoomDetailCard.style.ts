import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const roomDetailCardContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const roomTitleStyle = (theme: Theme) => css`
  ${theme.font.title3_sb_18};
  color: ${theme.color.black};
`;

export const roomOptionContainer = css`
  display: flex;
  gap: 2rem;
`;

export const roomOptionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const roomOptionStyle = css`
  display: flex;
  gap: 0.9rem;
`;

export const roomOptionIconStyle = css`
  width: 2rem;
  height: 2rem;
`;

export const roomOptionTextStyle = (theme: Theme) => css`
  ${theme.font.body2_m_14};
  color: ${theme.color.black};
`;
