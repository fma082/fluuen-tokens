'use client';

import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', icon: 'dashboard', active: true },
  { label: 'Agents', icon: 'agents' },
  { label: 'Runs', icon: 'runs', badge: true },
  { label: 'Integrations', icon: 'integrations' },
  { label: 'Settings', icon: 'settings' },
];

function DashboardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 2h5v5H2V2zm7 0h5v5H9V2zm-7 7h5v5H2V9zm7 0h5v5H9V9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AgentsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2a3 3 0 110 6 3 3 0 010-6zm0 8c3.314 0 6 1.343 6 3v1H2v-1c0-1.657 2.686-3 6-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RunsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polygon points="5,3 13,8 5,13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IntegrationsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M6 4h4M4 6v4M12 6v4M6 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function LogoIcon() {
  return (
    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--brand-primary)' }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

const iconMap: Record<string, React.FC> = {
  dashboard: DashboardIcon,
  agents: AgentsIcon,
  runs: RunsIcon,
  integrations: IntegrationsIcon,
  settings: SettingsIcon,
};

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  return (
    <aside className="flex flex-col h-full w-[192px] shrink-0" style={{ background: 'var(--bg-secondary)', borderRight: '1px solid var(--surface-tertiary)' }}>
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5">
        <LogoIcon />
        <div>
          <div className="text-sm font-semibold text-white leading-tight">Next Agent</div>
          <div className="text-[10px] font-medium uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>Workspace</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 px-2 flex-1">
        {navItems.map(item => {
          const Icon = iconMap[item.icon];
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all w-full text-left relative"
              style={{
                color: isActive ? 'white' : 'var(--text-secondary)',
                background: isActive ? 'var(--surface-primary)' : 'transparent',
              }}
            >
              <Icon />
              {item.label}
              {item.badge && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand-primary)' }} />
              )}
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-3 border-t flex items-center gap-2.5" style={{ borderColor: 'var(--surface-tertiary)' }}>
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: 'var(--brand-primary)' }}>
          FA
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-white truncate">Facundo A.</div>
          <div className="text-[11px]" style={{ color: 'var(--text-tertiary)' }}>Admin</div>
        </div>
        <button className="shrink-0" style={{ color: 'var(--text-tertiary)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </aside>
  );
}
