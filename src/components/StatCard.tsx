interface StatCardProps {
  title: string;
  value: string;
  delta: string;
  positive: boolean;
  icon: React.ReactNode;
}

export default function StatCard({ title, value, delta, positive, icon }: StatCardProps) {
  return (
    <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>{title}</span>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--surface-secondary)' }}>
          {icon}
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold text-white">{value}</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs font-medium" style={{ color: positive ? 'var(--success)' : 'var(--error)' }}>
            {positive ? '↑' : '↓'} {delta}
          </span>
          <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>vs last 30d</span>
        </div>
      </div>
    </div>
  );
}
