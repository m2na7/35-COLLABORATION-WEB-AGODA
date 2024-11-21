import { useState } from 'react';
import {
  optionButton,
  optionWrapper,
  activeBorderButton,
  activeText,
} from './OptionBar.style';

const OptionBar = () => {
  const [isLimitedSaleActive, setIsLimitedSaleActive] = useState(false);

  return (
    <div css={optionWrapper}>
      <button css={optionButton}>
        <span>정렬</span>
        <span>|</span>
        <span css={activeText}>추천순</span>
      </button>

      <button
        css={[optionButton, isLimitedSaleActive && activeBorderButton]}
        onClick={() => setIsLimitedSaleActive(!isLimitedSaleActive)}
      >
        시간 한정 세일 보기
      </button>
    </div>
  );
};

export default OptionBar;
