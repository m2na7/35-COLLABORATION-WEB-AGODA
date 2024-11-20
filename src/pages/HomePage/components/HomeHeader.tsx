import { CATEGORY_DATA } from '@utils/constants/home/categoryConstants';
import { CHIP_DATA } from '@utils/constants/home/chipConstants';
import CategoryButton from '@pages/HomePage/components/CategoryButton';
import Chip from '@pages/HomePage/components/Chip';
import homeVipChip from '@assets/img/home_vipchip.png';
import { 
        backgroundContainer, 
        vipChipImage, 
        categoryButtonContainer,
        text,
        chipContainer
      } from './HomeHeder.style';
import Spacing from './Spacing';
import BarTravel from './BarTravel';

const HomeHeader = () => {
  return (
      <div css={backgroundContainer}>
        <img src={homeVipChip} alt="VIP Chip" css={vipChipImage} />
        <Spacing width={0} height={16} />
        <div css={categoryButtonContainer}>
          {CATEGORY_DATA.map((category, index) => (
            <CategoryButton
              key={index}
              label={category.label}
              icon={category.icon}
              isActive={category.isActive}
            />
          ))}
        </div>
        <Spacing width={0} height={16} />

        <BarTravel/>
        
        <Spacing width={0} height={40} />
        <h3 css={text}>다른 교통편도 확인해 보세요</h3>
        <Spacing width={0} height={8} />

        <div css={chipContainer}>
          {CHIP_DATA.map((chip) => (
            <Chip key={chip.label} label={chip.label} icon={chip.icon} />
          ))}
        </div>

      </div>

  );
};

export default HomeHeader;
