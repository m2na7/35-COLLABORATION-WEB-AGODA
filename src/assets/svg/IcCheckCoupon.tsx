import type { SVGProps } from "react";
const SvgIcCheckCoupon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 33"
    {...props}
  >
    <path
      fill="url(#ic_check_coupon_svg__a)"
      d="M17 30c8.284 0 15-6.716 15-15S25.284 0 17 0 2 6.716 2 15s6.716 15 15 15"
    />
    <path fill="#406CEA" d="M12.728 11h8.486v8.485L8.484 32.213 0 23.728z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m15.924 18.617-5.216 5.216-3.116-2.893.816-.88 2.269 2.107 4.399-4.399z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="ic_check_coupon_svg__a"
        x1={27.313}
        x2={5.281}
        y1={1.875}
        y2={23.906}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEF2FF" />
        <stop offset={1} stopColor="#406CEA" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgIcCheckCoupon;
