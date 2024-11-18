import type { SVGProps } from 'react';
const SvgIcStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 13 13'
    {...props}
  >
    <g clipPath='url(#ic_star_svg__a)'>
      <path
        fill='#EEB037'
        d='m6.5 0 1.949 3.818 4.233.673-3.03 3.033.669 4.235L6.5 9.815l-3.82 1.944.667-4.235L.318 4.491l4.233-.673z'
      />
    </g>
    <defs>
      <clipPath id='ic_star_svg__a'>
        <path fill='#fff' d='M0 0h13v13H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcStar;
