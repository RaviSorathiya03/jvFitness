export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`brand${light ? " brand-light" : ""}`} aria-label="JV Fitness home">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none"><path d="M8 12h9v13c0 5-3 7-8 7v-6c2 0 3-1 3-3v-6H8v-5Zm12 0h6l2.5 11L32 12h6l-7 20h-6l-5-20Z" fill="currentColor" /></svg>
      </span>
      <span className="brand-type">jv<span>fitness</span><small>FITNESS & WELLNESS CLUB</small></span>
    </a>
  );
}
