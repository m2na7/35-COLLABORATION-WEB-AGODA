import type { SVGProps } from "react";
const SvgIcFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#484848"
      strokeLinecap="round"
      d="M3 4.5h14M3 10.5h14M3 15.5h14"
    />
    <circle cx={6.5} cy={4.5} r={1.5} fill="#484848" />
    <circle cx={13.5} cy={10.5} r={1.5} fill="#484848" />
    <circle cx={6.5} cy={15.5} r={1.5} fill="#484848" />
  </svg>
);
export default SvgIcFilter;
