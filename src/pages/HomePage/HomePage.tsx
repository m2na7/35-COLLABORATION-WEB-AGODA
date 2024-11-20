import Card from "@pages/HomePage/components/Card";
import Chip from '@pages/HomePage/components/Chip';
import { CHIP_DATA } from '@/utils/constants/home/chipConstants'; // CHIP_DATA 배열 import

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>

      <Card imageUrl="https://via.placeholder.com/150" title="서울" count={5945} />
      <Card imageUrl="https://via.placeholder.com/150" title="제주" count={4939} />

      {CHIP_DATA.map((chip, index) => (
        <Chip key={index} label={chip.label} icon={chip.icon} />
      ))}
    </>
  );
};

export default HomePage;
