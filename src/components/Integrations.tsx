const integrations = [
  { name: 'Gmail', color: '#F85149', connected: true },
  { name: 'Google Sheets', color: '#3FB950', connected: true },
  { name: 'Slack', color: '#D29922', connected: true },
  { name: 'Notion', color: '#FFFFFF', connected: true },
  { name: 'Postgres', color: '#58A6FF', connected: false },
  { name: 'Jira', color: '#6366F1', connected: false },
];

export default function Integrations() {
  return (
    <div className="rounded-xl p-5" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-white">Integrations</div>
        <div className="px-2 py-0.5 rounded text-xs font-medium" style={{ background: '#1A2F1E', color: '#3FB950' }}>
          4 connected
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {integrations.map(int => (
          <div key={int.name} className="flex items-center gap-2 py-1">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: int.connected ? int.color : 'var(--text-tertiary)' }} />
            <span className="text-sm" style={{ color: int.connected ? 'var(--text-secondary)' : 'var(--text-tertiary)' }}>
              {int.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
