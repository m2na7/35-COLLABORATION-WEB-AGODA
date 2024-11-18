import { starWrapper } from './StarRating.style';
import { IcStar, IcStarBlue } from '@assets/svg';

interface StarRatingProps {
  rating: number;
  variant?: 'default' | 'blue';
}

const StarRating = ({ rating, variant = 'default' }: StarRatingProps) => {
  const stars = Math.min(Math.max(rating, 0), 5);
  const StarIcon = variant === 'blue' ? IcStarBlue : IcStar;

  return (
    <div css={starWrapper(variant)}>
      {Array.from({ length: stars }).map((_, index) => (
        <StarIcon key={index} width={13} height={13} />
      ))}
    </div>
  );
};

export default StarRating;
