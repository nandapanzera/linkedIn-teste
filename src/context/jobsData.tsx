'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

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
};

type JobsContextData = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
};

const JobsContext = createContext({} as JobsContextData);

export function JobsProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([]);

  const value = {
    jobs,
    setJobs,
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
