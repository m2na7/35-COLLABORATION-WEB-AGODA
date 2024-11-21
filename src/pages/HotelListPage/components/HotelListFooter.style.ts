import { css } from '@emotion/react';
import theme from '@styles/theme';

const footerWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0 1rem 2.7rem 1rem;
  background-color: ${theme.color.gray200};
`;

const infoText = css`
  ${theme.font.body4_m_12}
  color: ${theme.color.gray800};
`;

const detail = css`
  ${theme.font.body3_sb_12}
  color: ${theme.color.agoda_blue};
  cursor: pointer;
`;

export { footerWrapper, infoText, detail };
