import { footerWrapper, infoText, detail } from './HotelListFooter.style';
import Button from '@components/Button/Button';

const HotelListFooter = () => {
  return (
    <div css={footerWrapper}>
      <Button variant='outlined'>더보기</Button>

      <div>
        <p css={infoText}>
          검색 결과 순위는 수수료 수익의 영향을 받습니다. 검색 결과 순위에 대해
        </p>
        <p css={detail}>자세히 보기</p>
      </div>
    </div>
  );
};

export default HotelListFooter;
