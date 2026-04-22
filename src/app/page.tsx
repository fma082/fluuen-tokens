import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import RunsChart from '@/components/RunsChart';
import AgentStatus from '@/components/AgentStatus';
import RecentRuns from '@/components/RecentRuns';
import TopAgents from '@/components/TopAgents';
import Integrations from '@/components/Integrations';
import QuickActions from '@/components/QuickActions';
import Header from '@/components/Header';

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-5">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <StatCard
              title="Runs Executed"
              value="2,847"
              delta="+12%"
              positive={true}
              icon={<ActivityIcon />}
            />
            <StatCard
              title="Success Rate"
              value="94.2%"
              delta="+2.1%"
              positive={true}
              icon={<CheckIcon />}
            />
            <StatCard
              title="Avg. Run Time"
              value="1m 24s"
              delta="-8s"
              positive={true}
              icon={<ClockIcon />}
            />
            <StatCard
              title="Active Agents"
              value="12"
              delta="+3"
              positive={true}
              icon={<SparkleIcon />}
            />
          </div>

          {/* Chart + Agent Status Row */}
          <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: '1fr 220px' }}>
            <RunsChart />
            <AgentStatus />
          </div>

          {/* Bottom Row */}
          <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr 240px' }}>
            <RecentRuns />
            <TopAgents />
            <div className="flex flex-col gap-4">
              <Integrations />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ActivityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--brand-primary)' }}>
      <polyline points="1,9 4,5 7,8 10,4 13,7 15,5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--success)' }}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--info)' }}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--brand-primary)' }}>
      <path d="M8 2l1.5 4.5L14 8l-4.5 1.5L8 14l-1.5-4.5L2 8l4.5-1.5L8 2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
