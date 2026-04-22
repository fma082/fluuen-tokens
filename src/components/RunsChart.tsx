'use client';

import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { day: 'Apr 1', success: 80, error: 8 },
  { day: 'Apr 2', success: 95, error: 12 },
  { day: 'Apr 3', success: 110, error: 6 },
  { day: 'Apr 4', success: 130, error: 15 },
  { day: 'Apr 5', success: 100, error: 10 },
  { day: 'Apr 6', success: 85, error: 5 },
  { day: 'Apr 7', success: 90, error: 8 },
  { day: 'Apr 8', success: 120, error: 14 },
  { day: 'Apr 9', success: 140, error: 18 },
  { day: 'Apr 10', success: 115, error: 9 },
  { day: 'Apr 11', success: 105, error: 7 },
  { day: 'Apr 12', success: 125, error: 11 },
  { day: 'Apr 13', success: 135, error: 16 },
  { day: 'Apr 14', success: 95, error: 6 },
  { day: 'Apr 15', success: 88, error: 4 },
  { day: 'Apr 16', success: 102, error: 9 },
  { day: 'Apr 17', success: 118, error: 13 },
  { day: 'Apr 18', success: 130, error: 20 },
  { day: 'Apr 19', success: 145, error: 15 },
  { day: 'Apr 20', success: 110, error: 8 },
  { day: 'Apr 21', success: 98, error: 5 },
  { day: 'Apr 22', success: 125, error: 12 },
  { day: 'Apr 23', success: 138, error: 17 },
  { day: 'Apr 24', success: 115, error: 10 },
  { day: 'Apr 25', success: 90, error: 6 },
  { day: 'Apr 26', success: 105, error: 8 },
  { day: 'Apr 27', success: 122, error: 14 },
  { day: 'Apr 28', success: 140, error: 19 },
  { day: 'Apr 29', success: 118, error: 11 },
  { day: 'Apr 30', success: 40, error: 3 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg px-3 py-2 text-xs" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--surface-tertiary)', color: 'white' }}>
        <div className="font-medium mb-1">{label}</div>
        {payload.map(p => (
          <div key={p.name} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span style={{ color: 'var(--text-secondary)' }}>{p.name}:</span>
            <span className="font-medium">{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function RunsChart() {
  return (
    <div className="rounded-xl p-5" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
      <div className="flex items-start justify-between mb-1">
        <div>
          <div className="text-sm font-semibold text-white">Runs over time</div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Last 30d</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: 'var(--brand-secondary)' }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Success</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: 'var(--error)' }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Error</span>
          </div>
        </div>
      </div>
      <div className="h-44 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={16} barGap={2}>
            <XAxis dataKey="day" tick={{ fill: '#6E7681', fontSize: 10 }} axisLine={false} tickLine={false} interval={4} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
            <Bar dataKey="success" name="Success" stackId="a" fill="#6366F1" radius={[0, 0, 0, 0]} />
            <Bar dataKey="error" name="Error" stackId="a" fill="#F85149" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
