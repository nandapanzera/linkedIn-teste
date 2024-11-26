'use client';

import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type Skill = {
  job_id: number;
  skill_name: string;
};

type Salaries = {
  currency: string;
  job_id: number;
  max_salary: number;
  min_salary: number;
  med_salary: number;
  pay_period: string;
};

export type Job = {
  job_id: number;
  title: string;
  location: string;
  job_skills: Skill[];
  salaries: Salaries[];
  contact?: string;
};

type JobsContextData = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
};

const JobsContext = createContext({} as JobsContextData);

export function JobsProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

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

  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    jobs,
    setJobs,
    loading,
    setLoading,
    loaded,
    setLoaded,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}

export function useJobs() {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobsProvider');
  }

  return context;
}
