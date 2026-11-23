// Small inline line-icon set (24×24, stroke = currentColor).
const paths = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 14l4-4" />
      <path d="M3.5 18a9 9 0 1 1 17 0" />
      <circle cx="12" cy="14" r="1.2" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <line x1="5.6" y1="5.6" x2="9.2" y2="9.2" />
      <line x1="14.8" y1="14.8" x2="18.4" y2="18.4" />
      <line x1="14.8" y1="9.2" x2="18.4" y2="5.6" />
      <line x1="5.6" y1="18.4" x2="9.2" y2="14.8" />
    </>
  ),
  users: (
    <>
      <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
      <circle cx="10" cy="8" r="3.5" />
      <path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
      <path d="M15.5 4.65a3.5 3.5 0 0 1 0 6.7" />
    </>
  ),
  chat: (
    <path d="M21 12a8 8 0 0 1-11.6 7.15L4 20.5l1.35-4.6A8 8 0 1 1 21 12z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 12.5 12 17.5 21 12.5" />
      <polyline points="3 17 12 22 21 17" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1-2 4-2 6 2 0 5-.5 6-2" />
      <path d="M9 15l-3-3c1.5-4.5 5.5-9 13-9 0 7.5-4.5 11.5-9 13z" />
      <circle cx="14.5" cy="9.5" r="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21s-8-3.5-8-10V5l8-2.5L20 5v6c0 6.5-8 10-8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <polyline points="3.5 6.5 12 13 20.5 6.5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <line x1="9" y1="7.5" x2="9" y2="7.5" />
      <line x1="15" y1="7.5" x2="15" y2="7.5" />
      <line x1="9" y1="11.5" x2="9" y2="11.5" />
      <line x1="15" y1="11.5" x2="15" y2="11.5" />
      <path d="M10 21v-4h4v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="7" y1="14.5" x2="10" y2="14.5" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-9-9.5C1.9 6.8 4.4 4 7.5 4c2 0 3.6 1.1 4.5 2.6C12.9 5.1 14.5 4 16.5 4c3.1 0 5.6 2.8 4.5 6.5C19.5 15.4 12 20 12 20z" />
  ),
  sparkle: (
    <path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z" />
  ),
  home: (
    <>
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z" />
    </>
  ),
  arrowRight: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
  check: <polyline points="5 12.5 10 17.5 19 7" />,
  menu: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </>
  ),
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  ),
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  arrowUp: (
    <>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="6 11 12 5 18 11" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="10.5" x2="8" y2="16.5" />
      <line x1="8" y1="7.5" x2="8" y2="7.6" />
      <path d="M12 16.5v-3.5a2.5 2.5 0 0 1 5 0v3.5" />
      <line x1="12" y1="10.5" x2="12" y2="16.5" />
    </>
  ),
  facebook: (
    <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H9.2v3h2.5V21" />
  ),
} as const;

export type IconName = keyof typeof paths;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const Icon = ({ name, size = 24, strokeWidth = 1.8, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {paths[name]}
  </svg>
);

export default Icon;
