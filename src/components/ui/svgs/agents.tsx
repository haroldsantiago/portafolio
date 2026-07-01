export function Agents(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Agents</title>
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 11.2v3.6M12 14.8L9.2 17M12 14.8L14.8 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="19.4" r="1.6" fill="currentColor" />
      <circle cx="12" cy="19.4" r="1.6" fill="currentColor" />
      <circle cx="18" cy="19.4" r="1.6" fill="currentColor" />
      <path
        d="M4.8 7.2h2.4M16.8 7.2h2.4M5.6 12h1.6M16.8 12h1.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
