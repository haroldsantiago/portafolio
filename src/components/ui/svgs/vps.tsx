export function Vps(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>VPS</title>
      <rect x="3" y="4" width="18" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="3" y="13" width="18" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6.8" cy="7.5" r="1" />
      <circle cx="6.8" cy="16.5" r="1" />
      <line x1="10.5" y1="7.5" x2="17.2" y2="7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <line x1="10.5" y1="16.5" x2="17.2" y2="16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
