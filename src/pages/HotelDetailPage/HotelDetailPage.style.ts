import { css, Theme } from "@emotion/react";

export const Divider = (theme: Theme) => css`
  border: none;
  border-top: 1px solid ${theme.color.gray300};
  margin: 1.5rem 0;
`;
