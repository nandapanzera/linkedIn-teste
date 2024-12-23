import { Principal } from './pages/Principal';
import { JobsProvider } from '@/context/jobsData';

//Componente principal da aplicação
export default function Home() {
  return (
    <JobsProvider>
      <body className="flex w-full bg-zinc-200">
        <Principal />
      </body>
    </JobsProvider>
  );
}
