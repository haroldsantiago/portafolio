export function Ai(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>IA</title>
      <rect x="7" y="7" width="10" height="10" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="10.4" cy="11" r="1.05" fill="currentColor" />
      <circle cx="13.6" cy="11" r="1.05" fill="currentColor" />
      <path d="M9.8 14.2h4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M10 7V4.4M14 7V4.4M10 19.6V17M14 19.6V17M7 10H4.4M7 14H4.4M19.6 10H17M19.6 14H17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
