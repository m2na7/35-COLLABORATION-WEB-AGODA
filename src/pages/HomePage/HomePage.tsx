import Header from "@components/Header/Header";
import Card from "@pages/HomePage/components/Card";
import Chip from '@pages/HomePage/components/Chip';
import { CHIP_DATA } from '@/utils/constants/home/chipConstants';
import { CATEGORY_DATA } from "@utils/constants/home/categoryConstants";
import CategoryButton from '@pages/HomePage/components/CategoryButton';
import Button from "@components/Button/Button";

const HomePage = () => {
  return (
    <>
      <Header />

      {CATEGORY_DATA.map((category, index) => (
        <CategoryButton key={index} label={category.label} icon={category.icon} isActive={category.isActive} />
      ))}
      <div>
        {CHIP_DATA.map((chip) => (
          <Chip key={chip.label} label={chip.label} icon={chip.icon} />
        ))}
      </div>
      <Card imageUrl="https://via.placeholder.com/150" title="서울" count={5945} />
      <Card imageUrl="https://via.placeholder.com/150" title="제주" count={4939} />
      <Card imageUrl="https://via.placeholder.com/150" title="도쿄 / 동경" count={12486} />
      
      <Button variant="outlined">더보기</Button>
    </>
  );
};

export default HomePage;
