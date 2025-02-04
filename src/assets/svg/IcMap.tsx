import * as React from "react";
import type { SVGProps } from "react";
const SvgIcMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 20"
    {...props}
  >
    <path
      fill="#DDD"
      d="M24.306 0a.7.7 0 0 0-.216.028l-7.423 2.305L8.333 0 .507 2.111C.215 2.19 0 2.39 0 2.644v16.8a.47.47 0 0 0 .077.252q.077.118.21.197a.8.8 0 0 0 .3.099.9.9 0 0 0 .323-.02l7.423-2.305L16.667 20l7.833-2.106c.292-.083.5-.283.5-.538V.556C25 .25 24.688 0 24.306 0m-7.64 17.778-8.333-2.34V2.223l8.334 2.34z"
    />
  </svg>
);
export default SvgIcMap;
