const statuses = [
  { label: 'Active', count: 12, color: '#3FB950' },
  { label: 'Paused', count: 4, color: '#D29922' },
  { label: 'Draft', count: 7, color: '#58A6FF' },
  { label: 'Error', count: 2, color: '#F85149' },
];

export default function AgentStatus() {
  return (
    <div className="rounded-xl p-5 flex flex-col gap-4" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
      <div className="text-sm font-semibold text-white">Agent status</div>
      <div className="flex flex-col gap-3">
        {statuses.map(s => (
          <div key={s.label}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.label}</span>
              </div>
              <span className="text-sm font-semibold text-white">{s.count}</span>
            </div>
            <div className="h-0.5 rounded-full" style={{ background: 'var(--surface-tertiary)' }}>
              <div
                className="h-full rounded-full"
                style={{ width: `${(s.count / 25) * 100}%`, background: s.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid var(--surface-secondary)' }}>
        <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Total agents</span>
        <span className="text-sm font-bold text-white">25</span>
      </div>
    </div>
  );
}
