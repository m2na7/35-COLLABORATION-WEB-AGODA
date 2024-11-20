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
        정렬 &nbsp;|&nbsp; <span css={activeText}>추천순</span>
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
