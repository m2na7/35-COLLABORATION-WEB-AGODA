import type { SVGProps } from "react";
const SvgIcBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1F2427"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17 2-9.301 9.528a1 1 0 0 0 .017 1.414L17 22"
    />
  </svg>
);
export default SvgIcBack;
