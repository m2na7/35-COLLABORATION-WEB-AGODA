import React from 'react';
import { CategoryButtonContainer } from './CategoryButton.style';

interface CategoryProps {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isActive: boolean;
}

const CategoryButton = ({ label, icon: Icon, isActive }: CategoryProps) => {
  return (
    <div css={CategoryButtonContainer({ label, icon: Icon, isActive })}>
      <Icon width={22} />
      {label}
    </div>
  );
};

export default CategoryButton;
