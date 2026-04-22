'use client';

import { LineChart, Line, ResponsiveContainer } from 'recharts';

const agents = [
  {
    name: 'Invoice Processing',
    runs: '842 runs · 97% ok',
    color: '#3FB950',
    sparkData: [40, 60, 55, 75, 70, 90, 85, 95, 88, 100],
    icon: '✉',
    iconBg: '#1A2F1E',
  },
  {
    name: 'Lead Enrichment',
    runs: '631 runs · 91% ok',
    color: '#8B5DFF',
    sparkData: [50, 45, 65, 60, 70, 65, 80, 75, 85, 80],
    icon: '✦',
    iconBg: '#1E1A2F',
  },
  {
    name: 'Support Triage',
    runs: '519 runs · 95% ok',
    color: '#58A6FF',
    sparkData: [30, 50, 45, 60, 55, 70, 65, 75, 70, 80],
    icon: '🔔',
    iconBg: '#1A1F2F',
  },
  {
    name: 'Weekly Report',
    runs: '412 runs · 100% ok',
    color: '#6366F1',
    sparkData: [20, 30, 28, 40, 35, 50, 45, 60, 55, 65],
    icon: '≡',
    iconBg: '#1A1D2F',
  },
  {
    name: 'Slack Digest',
    runs: '248 runs · 88% ok',
    color: '#D29922',
    sparkData: [60, 50, 65, 55, 70, 60, 75, 65, 80, 70],
    icon: '⬡',
    iconBg: '#2F251A',
  },
];

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const points = data.map((v, i) => ({ v }));
  return (
    <div style={{ width: 60, height: 32 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function TopAgents() {
  return (
    <div className="rounded-xl p-5" style={{ background: 'var(--surface-primary)', border: '1px solid var(--surface-secondary)' }}>
      <div className="text-sm font-semibold text-white mb-4">Top agents</div>
      <div className="flex flex-col gap-0">
        {agents.map((agent, i) => (
          <div
            key={agent.name}
            className="flex items-center gap-3 py-2.5"
            style={{ borderBottom: i < agents.length - 1 ? '1px solid var(--surface-secondary)' : 'none' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
              style={{ background: agent.iconBg, color: agent.color }}
            >
              {agent.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">{agent.name}</div>
              <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{agent.runs}</div>
            </div>
            <MiniSparkline data={agent.sparkData} color={agent.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
