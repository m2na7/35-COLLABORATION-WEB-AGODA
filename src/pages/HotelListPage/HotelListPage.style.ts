import { css } from '@emotion/react';
import theme from '@styles/theme';

const hotelListHeaderContainer = css`
  display: grid;
  gap: 1rem;
  padding: 1rem 1.2rem 1.2rem 1.2rem;
`;

const hotelListWrapper = css`
  padding: 0.7rem 0;
  background-color: ${theme.color.gray200};
`;

const cardWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export { hotelListHeaderContainer, hotelListWrapper, cardWrapper };
