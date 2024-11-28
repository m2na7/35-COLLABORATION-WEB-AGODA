import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const HotelDetailLayout = (theme: Theme) => css`
  background-color: ${theme.color.gray200};

  display: flex;
  flex-direction: column;
  gap: 7.4rem;
`;

export const HotelDetailContainer = (theme: Theme) => css`
  background-color: ${theme.color.white};

  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
