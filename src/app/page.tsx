import { Principal } from './pages/Principal';
import { JobsProvider } from '@/context/jobsData';

export default function Home() {
  return (
    <JobsProvider>
      <div className="flex h-screen w-full bg-zinc-200">
        <Principal />
      </div>
    </JobsProvider>
  );
}
