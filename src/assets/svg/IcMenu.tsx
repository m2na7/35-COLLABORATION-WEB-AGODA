import type { SVGProps } from "react";
const SvgIcMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#1F2427" strokeWidth={1.5} d="M3 5h18M3 12h18M3 19h18" />
  </svg>
);
export default SvgIcMenu;
