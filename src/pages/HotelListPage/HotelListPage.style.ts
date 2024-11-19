import { Theme, css } from '@emotion/react';

const cardContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 100%;
  gap: 0.8rem;
  background-color: ${theme.color.gray200};
`;

export { cardContainer };
