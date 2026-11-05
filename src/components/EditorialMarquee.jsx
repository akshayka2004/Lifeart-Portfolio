import React from 'react';
import { MARQUEE_ITEMS } from '../content/company';

export default function EditorialMarquee({ variant = 'dark', onSelectServices }) {
  const isDark = variant === 'dark';
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className={`editorial-marquee-strip ${isDark ? 'marquee-dark' : 'marquee-light'}`}
      aria-label="Lifeart Group Enterprise ERP & Consultancy Capabilities"
    >
      <div className="editorial-marquee-track">
        {repeatedItems.map((item, idx) => (
          <button
            key={`${item}-${idx}`}
            type="button"
            onClick={() => onSelectServices && onSelectServices()}
            className="editorial-marquee-item"
          >
            <span className="editorial-marquee-diamond" aria-hidden="true">◆</span>
            <span className="editorial-marquee-text font-serif">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

