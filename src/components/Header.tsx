'use client';

import { useState } from 'react';

const timeFilters = ['7d', '30d', '90d'];

export default function Header() {
  const [active, setActive] = useState('30d');

  return (
    <header
      className="flex items-center justify-between px-5 py-3 shrink-0"
      style={{ borderBottom: '1px solid var(--surface-tertiary)', background: 'var(--bg-primary)' }}
    >
      <h1 className="text-lg font-bold text-white">Dashboard</h1>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
          style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)', color: 'var(--text-tertiary)', width: 220 }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M9 9l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Search agents, runs...
        </div>

        {/* Time filters */}
        <div className="flex items-center rounded-lg overflow-hidden" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
          {timeFilters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-3 py-1.5 text-xs font-semibold transition-colors"
              style={{
                background: active === f ? 'var(--brand-primary)' : 'transparent',
                color: active === f ? 'white' : 'var(--text-tertiary)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: 'var(--brand-primary)' }}>
          FA
        </div>
      </div>
    </header>
  );
}
