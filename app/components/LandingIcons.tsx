/**
 * Inline SVG icons for the landing page.
 * Kept dependency-free and stroke-based so they inherit `currentColor`
 * and stay razor-sharp at any size with zero extra network requests.
 */
type IconProps = {className?: string};

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function IconSurround({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M6.5 6.5a8 8 0 0 0 0 11M17.5 6.5a8 8 0 0 1 0 11" />
      <path d="M4 4a12 12 0 0 0 0 16M20 4a12 12 0 0 1 0 16" />
    </svg>
  );
}

export function IconPosition({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2v2M12 16v6M2 10h2M20 10h2" />
      <path d="M12 22c-4-4-7-7-7-12a7 7 0 0 1 14 0c0 1.5-.3 2.9-.8 4.1" />
    </svg>
  );
}

export function IconHandsFree({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 4h-2" />
    </svg>
  );
}

export function IconVoice({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
    </svg>
  );
}

export function IconBattery({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="7" width="16" height="10" rx="2.5" />
      <path d="M22 10v4" />
      <path d="M6 10l3 4h2l-1 0M7.5 12H12" />
    </svg>
  );
}

export function IconWater({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5S5.5 9.5 5.5 14a6.5 6.5 0 0 0 13 0c0-4.5-6.5-11.5-6.5-11.5Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </svg>
  );
}

export function IconTouch({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 11V6a2 2 0 0 1 4 0v5" />
      <path d="M13 11V9a2 2 0 0 1 4 0v6a5 5 0 0 1-5 5h-1.5a4 4 0 0 1-3.2-1.6L4 14.5a1.8 1.8 0 0 1 2.7-2.3L9 14" />
    </svg>
  );
}

export function IconWave({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12v0M8 8v8M12 4v16M16 8v8M20 12v0" />
    </svg>
  );
}

export function IconComfort({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="7" rx="2" />
      <rect x="17" y="13" width="4" height="7" rx="2" />
    </svg>
  );
}

export function IconCall({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L19 12l4 1.5V17a2 2 0 0 1-2 2A16 16 0 0 1 5 4Z" />
    </svg>
  );
}

export function IconFinger({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l2.5 2.5" />
    </svg>
  );
}

export function IconPlay({className}: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function IconStar({className}: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5Z" />
    </svg>
  );
}

export function IconCart({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2.5 3h2l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h8.6a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
    </svg>
  );
}

export function IconArrow({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconTruck({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 6h11v9H2zM13 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function IconGlobe({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9S9.5 5.5 12 3Z" />
    </svg>
  );
}

export function IconReturn({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 9a9 9 0 1 1-.8 5" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

export function IconCheck({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12.5l5 5 11-11" />
    </svg>
  );
}

export function IconSearch({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function IconUser({className}: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.6 3.6-6 8-6s8 2.4 8 6" />
    </svg>
  );
}
