import { ChipProps } from './Chip.types';
import { ChipContainer} from './Chip.style';

const Chip = ({ label, icon : Icon }: ChipProps) => {
  return (
    <div css={ChipContainer}>
      <Icon width={20} />      
      {label}
    </div>
  );
};

export default Chip;
