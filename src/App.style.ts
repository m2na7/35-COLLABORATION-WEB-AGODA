import { css, Theme } from "@emotion/react";

export const h1Style = (theme: Theme) => css`
  color: ${theme.color.agoda_blue};
  ${theme.font.title1_sb_26}
`;
