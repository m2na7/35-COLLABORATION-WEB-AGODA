import { ChipContainer} from './Chip.style';

interface ChipProps {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

import React from 'react';

const Chip = ({ label, icon: Icon }: ChipProps) => {
  return (
    <div css={ChipContainer}>
      <Icon width={20} />      
      {label}
    </div>
  );
};

export default Chip;