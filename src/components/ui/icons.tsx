export function LoadingIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" fill="none" />
        <path d="M22,12 A10,10 0 0,1 12,22 10,10 0 0,1 2,12" fill="none" strokeLinecap="round" />
      </svg>
    );
  }