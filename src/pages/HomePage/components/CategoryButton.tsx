import { CategoryProps } from './CategoryButton.types';
import { CategoryButtonContainer } from './CategoryButton.style';

const CategoryButton = ({ label, icon: Icon, isActive }: CategoryProps) => {
  return (
    <div css={CategoryButtonContainer({ label, icon : Icon, isActive })}>
      <Icon width={22} />
      {label}
    </div>
  );
};

export default CategoryButton;
