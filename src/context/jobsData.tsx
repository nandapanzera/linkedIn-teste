'use client';

import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

// Tipagem dos dados que serão utilizados

// Tipagem das skills
type Skill = {
  job_id: number;
  skill_name: string;
};

// Tipagem dos salários
type Salaries = {
  currency: string;
  job_id: number;
  max_salary: number;
  min_salary: number;
  med_salary: number;
  pay_period: string;
};

// Tipagem dos trabalhos
export type Job = {
  job_id: number;
  title: string;
  location: string;
  job_skills: Skill[];
  salaries: Salaries[];
  contact?: string;
};

// Tipagem do contexto
type JobsContextData = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
};

// Criação do contexto que armaenará os dados
const JobsContext = createContext({} as JobsContextData);

// Provedor do contexto que será utilizado
export function JobsProvider({ children }: { children: ReactNode }) {
  // Estados que serão utilizados
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  // Função que irá buscar os dados dos trabalhos
  async function fetchJobs() {
    const response = await axios
      .get<Job[]>('http://localhost:3001/jobs', {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      })
      .then((res) => {
        const jobs: Job[] = res.data;
        jobs.forEach((job) => {
          job.contact = `contato-${job.job_id}@${job.title
            .replace(' ', '')
            .toLowerCase()}.com`;
        });
        setJobs(jobs);
        setLoaded(true);
      })
      .catch((err) => console.log(err));

    console.log(response);
  }

  // Efeito inicial que irá buscar os dados quando o componente for montado
  useEffect(() => {
    fetchJobs();
  }, []);

  // Valor que será passado para os componentes que utilizarem o contexto
  const value = {
    jobs,
    setJobs,
    loading,
    setLoading,
    loaded,
    setLoaded,
  };

  // Retorno do provedor do contexto
  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}

// Hook que irá retornar os dados do contexto
export function useJobs() {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobsProvider');
  }

  return context;
}
