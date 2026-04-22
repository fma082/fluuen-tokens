export default function QuickActions() {
  return (
    <div className="rounded-xl p-5" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
      <div className="text-sm font-semibold text-white mb-4">Quick actions</div>
      <div className="flex flex-col gap-2">
        <button
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--brand-primary)' }}
        >
          <span className="text-base leading-none">+</span>
          New agent
        </button>
        <button
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-colors"
          style={{ background: 'var(--surface-secondary)', color: 'var(--text-secondary)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <polygon points="4,2 11,7 4,12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
          </svg>
          View runs
        </button>
      </div>
    </div>
  );
}
