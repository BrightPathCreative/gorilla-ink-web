/** Custom inline icons matched to Gorilla Ink “Why choose us” points */

export function IconSkilledArtists({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M6 22v4h4l10-10-4-4L6 22zm13-13 4 4 2-2c1-1 1-3 0-4l-1-1c-1-1-3-1-4 0l-2 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 9h6M12 6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="22" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconPremiumDesign({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M6 26 16 6l10 20H6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 20h8M14 16h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconSafeComfort({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M16 4 6 9v8c0 6 4 11 10 13 6-2 10-7 10-13V9L16 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M11 16.5 14.5 20 22 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconEquipment({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="5" y="12" width="22" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 12V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="11" cy="17" r="1.3" fill="currentColor" />
      <circle cx="16" cy="17" r="1.3" fill="currentColor" />
      <circle cx="21" cy="17" r="1.3" fill="currentColor" />
      <path d="M16 22v4M13 26h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
