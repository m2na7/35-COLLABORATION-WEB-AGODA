import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@components/Button/Button';
import IcSearch from '@/assets/svg/IcSearch';
import IcCheckin from '@assets/svg/IcCheckin';
import IcCheckout from '@/assets/svg/IcCheckout';
import IcPerson from '@assets/svg/IcPerson';
import Spacing from './Spacing';
import IcSeparator from '@/assets/svg/IcSeparator';
import { containerStyle, searchIconStyle, iconStyle, buttonStyle, checkContainer, checkStyle, boxStyle, textStyle, dynamicTextStyle, checkLabelStyle, dateTextStyle, separatorStyle } from './BarTravel.style';

const BarTravel = () => {
  const [city, setCity] = useState<string | null>(null); 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cityFromURL = queryParams.get('city');
    if (cityFromURL) {
      setCity(cityFromURL);
    }
  }, [location]);

  const handleSearchClick = () => {
    if (city) {
      navigate('/hotel-list'); 
    }
  };

  return (
    <div css={containerStyle}>
      <button css={buttonStyle} onClick={() => navigate('/city')}>
        <Spacing width={12} height={0} />
        <IcSearch css={searchIconStyle} />
        <Spacing width={12} height={0} />
        {city ? city : "여행지/호텔명/프라이빗 하우스 검색"} 
      </button>

      <div css={checkStyle}>
        <Spacing width={12} height={0} />

        <IcCheckin css={iconStyle} />
        <Spacing width={12} height={0} />
        <div css={checkContainer}>
          <div css={checkLabelStyle}>
            체크인
          </div>
          <div css={dateTextStyle}>
            11월 23일 (토)
          </div>
        </div>

        <Spacing width={30} height={0} />
        <IcSeparator css={separatorStyle} />
        <Spacing width={12} height={0} />

        <IcCheckout css={iconStyle} />
        <Spacing width={12} height={0} />
        <div css={checkContainer}>
          <div css={checkLabelStyle}>
            체크아웃
          </div>
          <div css={dateTextStyle}>
            11월 24일 (일)
          </div>
        </div>
        <Spacing width={28} height={0} />
      </div>

      <div css={boxStyle}>
        <Spacing width={12} height={0} />
        <IcPerson css={iconStyle} />
        <Spacing width={8} height={0} />

        <span css={dynamicTextStyle}>1 </span>
        <span css={textStyle}>객실, </span>
        <span css={dynamicTextStyle}>2 </span>
        <span css={textStyle}>성인, </span>
        <span css={dynamicTextStyle}>0 </span>
        <span css={textStyle}>아동</span>
      </div>

      <Button variant="filled" disabled={!city} onClick={handleSearchClick}>
        검색하기
      </Button>
    </div>
  );
};

export default BarTravel;
