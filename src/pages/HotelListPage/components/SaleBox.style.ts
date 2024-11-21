import { css } from '@emotion/react';
import theme from '@styles/theme';

const saleBoxWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.9rem 2.2rem 1.9rem 1.4rem;
  margin: 0rem 1rem 0.7rem 1rem;

  border: 1px solid ${theme.color.blue300};
  border-radius: 16px;
  background-color: ${theme.color.blue100};
`;

const couponWrapper = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  ${theme.font.body1_b_14}
  color: ${theme.color.blue300};
`;

const couponBox = css`
  ${theme.font.body2_m_14}
  color: ${theme.color.bluegreen200};
  cursor: pointer;
`;

export { saleBoxWrapper, couponWrapper, couponBox };
