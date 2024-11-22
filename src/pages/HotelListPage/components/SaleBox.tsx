import { IcCheckCoupon } from '@assets/svg';
import { iconStyle } from '@styles/iconStyles';
import { saleBoxWrapper, couponWrapper, couponBox } from './SaleBox.style';

const SaleBox = () => {
  return (
    <div css={saleBoxWrapper}>
      <div css={couponWrapper}>
        <IcCheckCoupon css={iconStyle(3.2, 3.3)} />
        <p>할인 쿠폰을 받아보세요 !</p>
      </div>

      <p css={couponBox}>쿠폰함 가기</p>
    </div>
  );
};

export default SaleBox;
