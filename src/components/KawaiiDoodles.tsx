const doodleSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none"
  stroke="#b9a7d6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.55">
  <path d="M28 30a10 10 0 1 0 10 10 8 8 0 0 1-10-10z"/>
  <path d="M100 24l2.4 5 5.4.7-3.9 3.7 1 5.3-4.9-2.6-4.9 2.6 1-5.3-3.9-3.7 5.4-.7z"/>
  <path d="M158 34c0 4-3 7-7 7s-7-3-7-7 3-7 7-7c-2 2-2 5 0 7 1.6 1.6 4.2 1.6 7 0z"/>
  <path d="M40 96c0-6 5-10 11-10s11 4 11 10-5 9-11 9-11-3-11-9z"/>
  <path d="M45 96h2M55 96h2M48 100c2 2 4 2 6 0"/>
  <path d="M62 90c3-4 8-4 10 0"/>
  <path d="M120 100v14M120 106c-6 0-9-4-9-8 5 0 9 3 9 8zM120 104c5 0 9-3 9-7-5 0-9 3-9 7z"/>
  <path d="M168 96l1.8 3.8 4.2.6-3 2.8.7 4.1-3.7-2-3.7 2 .7-4.1-3-2.8 4.2-.6z"/>
  <path d="M24 156c0-5 4-8 9-8s9 3 9 8c0 4-4 6-9 6s-9-2-9-6z"/>
  <path d="M29 155h1.5M36 155h1.5M31 158c1.6 1.6 3.4 1.6 5 0"/>
  <path d="M96 150c-5 0-8 3-8 7s3 6 8 6 8-2 8-6-3-7-8-7z"/>
  <path d="M92 149c0-4 3-7 4-7s4 3 4 7"/>
  <path d="M152 152v12M152 158c-5 0-8-3-8-7 4 0 8 3 8 7z"/>
  <path d="M76 44l1.6 3.4 3.7.5-2.7 2.5.6 3.7-3.2-1.8-3.3 1.8.7-3.7-2.7-2.5 3.7-.5z"/>
</svg>`;

export const doodleDataUri = `url("data:image/svg+xml;utf8,${encodeURIComponent(doodleSvg)}")`;

export function SleepingFox({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 62c0-14 12-24 28-24s28 10 28 24c0 8-8 12-28 12s-28-4-28-12z" />
        <path d="M22 44l-4-14 14 6M70 44l4-14-14 6" />
        <path d="M34 58c2 2 5 2 7 0M53 58c2 2 5 2 7 0" />
        <path d="M44 64c2 2 4 2 6 0" />
        <path d="M74 68c14 2 26-4 30-14 2 8-4 20-16 22" />
        <path d="M84 26c1 4-1 7-4 8 4 1 7 4 7 8 2-4 5-6 9-6-4-2-6-5-6-9-2 2-4 2-6-1z" />
      </g>
    </svg>
  );
}
