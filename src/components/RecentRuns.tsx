const runs = [
  { status: 'success', name: 'Invoice Processing', trigger: 'Email Received', duration: '2m 10s', time: '1m ago' },
  { status: 'running', name: 'Lead Enrichment', trigger: 'Webhook', duration: '—', time: '3m ago' },
  { status: 'success', name: 'Support Triage', trigger: 'Slack Message', duration: '45s', time: '8m ago' },
  { status: 'error', name: 'Invoice Processing', trigger: 'Email Received', duration: '12s', time: '15m ago' },
  { status: 'success', name: 'Weekly Report', trigger: 'Schedule', duration: '3m 42s', time: '1h ago' },
  { status: 'success', name: 'Lead Enrichment', trigger: 'Webhook', duration: '1m 55s', time: '2h ago' },
  { status: 'success', name: 'Slack Digest', trigger: 'Schedule', duration: '22s', time: '3h ago' },
  { status: 'error', name: 'Support Triage', trigger: 'Slack Message', duration: '8s', time: '4h ago' },
];

const statusConfig: Record<string, { color: string; label: string; dot: string }> = {
  success: { color: '#3FB950', label: 'Success', dot: '#3FB950' },
  running: { color: '#6366F1', label: 'Running', dot: '#6366F1' },
  error: { color: '#F85149', label: 'Error', dot: '#F85149' },
};

export default function RecentRuns() {
  return (
    <div className="rounded-xl p-5" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-white">Recent runs</div>
        <button className="text-xs font-medium" style={{ color: 'var(--brand-primary)' }}>View all →</button>
      </div>
      <div className="flex flex-col">
        {runs.map((run, i) => {
          const cfg = statusConfig[run.status];
          return (
            <div
              key={i}
              className="flex items-center gap-3 py-2.5"
              style={{ borderBottom: i < runs.length - 1 ? '1px solid var(--surface-secondary)' : 'none' }}
            >
              <div className="flex items-center gap-1.5 w-20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cfg.dot }} />
                <span className="text-xs font-medium" style={{ color: cfg.color }}>{cfg.label}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">{run.name}</div>
                <div className="text-xs truncate" style={{ color: 'var(--text-tertiary)' }}>{run.trigger}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-medium text-white">{run.duration}</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{run.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
