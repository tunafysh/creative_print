import { SVGProps } from "react"

const Logo = ( {color}: {color: string}, props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={49}
      height={48}
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M0 12.1h13.5c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7H0c.5 6.8 6.2 12.1 13.1 12.1h.5c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7h-.5C6.2 35 .5 40.3 0 47.1h35.9c6.9 0 12.6-5.3 13.1-12.1H35.5c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7H49c-.5-6.8-6.2-12.1-13.1-12.1h-.5c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7h.5C42.8 12.1 48.5 6.8 49 0H13.1C6.2 0 .5 5.3 0 12.1Z"
      />
    </svg>
  )
  export default Logo
  