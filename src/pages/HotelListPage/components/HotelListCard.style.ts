import { css } from '@emotion/react';
import theme from '@styles/theme';

const hotelCardWrapper = css`
  display: flex;
  width: 95%;
  height: 18rem;

  border-radius: 16px;
  background-color: ${theme.color.white};
`;

const hotelInfoWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex-grow: 1;
  padding: 0.9rem 1rem 0.8rem 0.8rem;
`;

const hotelDescriptionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const hotelCardImage = css`
  width: 14.4rem;
  height: 18rem;
  object-fit: cover;
  border-radius: 16px 0 0 16px;
`;

const hotelTitle = css`
  ${theme.font.title4_b_16}
`;

const hotelDetailWrapper = css`
  display: flex;
  gap: 1.2rem;
`;

const hotelLocation = css`
  display: flex;
  gap: 0.2rem;
  ${theme.font.body4_m_12}
`;

const hotelRating = css`
  ${theme.font.button2_eb_12}
  color: ${theme.color.blue300};
`;

const hotelReviewWrapper = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${theme.font.body4_m_12}
`;

const hotelReview = css`
  ${theme.font.detail3_m_12}
  color: ${theme.color.gray600};
`;

const hotelHeartIcon = css`
  position: absolute;
  top: 0.9rem;
  right: 1rem;
`;

const hotelPriceWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: right;
`;

const hotelOriginalPrice = css`
  ${theme.font.body4_m_12}
  color: ${theme.color.gray600};
  text-decoration: line-through;
`;

const hotelDiscountPrice = css`
  ${theme.font.title2_sb_20}
`;

const hotelTaxPrice = css`
  ${theme.font.body4_m_12}
  color: ${theme.color.gray600};
`;

const hotelTagPrice = css`
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 0.8rem;
  color: ${theme.color.red200};
`;

export {
  hotelCardWrapper,
  hotelInfoWrapper,
  hotelDescriptionWrapper,
  hotelCardImage,
  hotelTitle,
  hotelDetailWrapper,
  hotelLocation,
  hotelRating,
  hotelReviewWrapper,
  hotelReview,
  hotelHeartIcon,
  hotelPriceWrapper,
  hotelOriginalPrice,
  hotelDiscountPrice,
  hotelTaxPrice,
  hotelTagPrice,
};
