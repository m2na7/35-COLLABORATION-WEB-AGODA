import { css } from '@emotion/react';

const starWrapper = (variant: 'default' | 'blue') => css`
  display: flex;
  gap: ${variant === 'blue' ? '0.2rem' : '0.1rem'};
`;

export { starWrapper };
