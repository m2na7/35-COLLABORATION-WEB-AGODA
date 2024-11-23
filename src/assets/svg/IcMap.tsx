import type { SVGProps } from "react";
const SvgIcMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 20"
    {...props}
  >
    <path
      fill="#1F2427"
      d="M6 5C3.795 5 2 6.795 2 8.998 1.986 12.22 5.848 14.892 6 15c0 0 4.015-2.78 4-6 0-2.205-1.795-4-4-4m0 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 6 11"
    />
  </svg>
);
export default SvgIcMap;
