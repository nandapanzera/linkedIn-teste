'use client';
import { List } from '../components/List';
import { Filter } from '../components/Filter';
import { Header } from '../components/Header';
import { Job, useJobs } from '@/context/jobsData';
import { useEffect, useState } from 'react';

export function Principal() {
  const { jobs } = useJobs();
  // const jobs = [
  //   {
  //     job_id: 1,
  //     title: 'Desenvolvedor Front-end',
  //     company: 'Empresa X',
  //     location: 'São Paulo',
  //     job_skills: [
  //       { job_id: 1, skill_name: 'React' },
  //       { job_id: 1, skill_name: 'JavaScript' },
  //       { job_id: 1, skill_name: 'CSS' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 1,
  //         min_salary: 5000,
  //         max_salary: 7000,
  //         med_salary: 6000,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 2,
  //     title: 'Desenvolvedor Back-end',
  //     company: 'Empresa Y',
  //     location: 'Rio de Janeiro',
  //     job_skills: [
  //       { job_id: 2, skill_name: 'Node.js' },
  //       { job_id: 2, skill_name: 'Express' },
  //       { job_id: 2, skill_name: 'MongoDB' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 2,
  //         min_salary: 6000,
  //         max_salary: 8500,
  //         med_salary: 7250,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 3,
  //     title: 'Desenvolvedor Mobile',
  //     company: 'Empresa Z',
  //     location: 'Belo Horizonte',
  //     job_skills: [
  //       { job_id: 3, skill_name: 'React Native' },
  //       { job_id: 3, skill_name: 'TypeScript' },
  //       { job_id: 3, skill_name: 'API REST' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 3,
  //         min_salary: 5500,
  //         max_salary: 8000,
  //         med_salary: 6750,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 4,
  //     title: 'Designer UX/UI',
  //     company: 'Empresa A',
  //     location: 'Curitiba',
  //     job_skills: [
  //       { job_id: 4, skill_name: 'Figma' },
  //       { job_id: 4, skill_name: 'Adobe XD' },
  //       { job_id: 4, skill_name: 'Design Thinking' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 4,
  //         min_salary: 4000,
  //         max_salary: 6000,
  //         med_salary: 5000,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 5,
  //     title: 'Analista de Dados',
  //     company: 'Empresa B',
  //     location: 'Florianópolis',
  //     job_skills: [
  //       { job_id: 5, skill_name: 'SQL' },
  //       { job_id: 5, skill_name: 'Python' },
  //       { job_id: 5, skill_name: 'Machine Learning' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 5,
  //         min_salary: 7000,
  //         max_salary: 10000,
  //         med_salary: 8500,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 6,
  //     title: 'Gerente de Projetos',
  //     company: 'Empresa C',
  //     location: 'Porto Alegre',
  //     job_skills: [
  //       { job_id: 6, skill_name: 'Gestão de Projetos' },
  //       { job_id: 6, skill_name: 'Scrum' },
  //       { job_id: 6, skill_name: 'Comunicação' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 6,
  //         min_salary: 9000,
  //         max_salary: 13000,
  //         med_salary: 11000,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 7,
  //     title: 'Engenheiro de Software',
  //     company: 'Empresa D',
  //     location: 'São Paulo',
  //     job_skills: [
  //       { job_id: 7, skill_name: 'Java' },
  //       { job_id: 7, skill_name: 'Spring' },
  //       { job_id: 7, skill_name: 'Docker' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 7,
  //         min_salary: 8000,
  //         max_salary: 12000,
  //         med_salary: 10000,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 8,
  //     title: 'Administrador de Banco de Dados',
  //     company: 'Empresa E',
  //     location: 'Rio de Janeiro',
  //     job_skills: [
  //       { job_id: 8, skill_name: 'MySQL' },
  //       { job_id: 8, skill_name: 'PostgreSQL' },
  //       { job_id: 8, skill_name: 'NoSQL' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 8,
  //         min_salary: 6000,
  //         max_salary: 9000,
  //         med_salary: 7500,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 9,
  //     title: 'Desenvolvedor Full Stack',
  //     company: 'Empresa F',
  //     location: 'São Paulo',
  //     job_skills: [
  //       { job_id: 9, skill_name: 'JavaScript' },
  //       { job_id: 9, skill_name: 'React' },
  //       { job_id: 9, skill_name: 'Node.js' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 9,
  //         min_salary: 7000,
  //         max_salary: 10000,
  //         med_salary: 8500,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  //   {
  //     job_id: 10,
  //     title: 'Tester de Software',
  //     company: 'Empresa G',
  //     location: 'São Paulo',
  //     job_skills: [
  //       { job_id: 10, skill_name: 'Testes Automatizados' },
  //       { job_id: 10, skill_name: 'Selenium' },
  //       { job_id: 10, skill_name: 'Agile' },
  //     ],
  //     salaries: [
  //       {
  //         currency: 'R$',
  //         job_id: 10,
  //         min_salary: 5000,
  //         max_salary: 7000,
  //         med_salary: 6000,
  //         pay_period: 'mensal',
  //       },
  //     ],
  //   },
  // ];

  const [favorite, setFavorites] = useState<Job[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  useEffect(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    if (storedFavoritos) {
      setFavorites(JSON.parse(storedFavoritos));
    }
  }, []);

  useEffect(() => {
    //Limpar o local storage
    console.log(favorite);
  }, [favorite]);

  const toggleFavorite = (jobId: number) => {
    const isFavorite = favorite.some((job) => job.job_id === jobId);
    if (isFavorite) {
      const newFavorites = favorite.filter((job) => job.job_id !== jobId);
      setFavorites(newFavorites);
      localStorage.setItem('favoritos', JSON.stringify(newFavorites));
    } else {
      const job = jobs.find((job) => job.job_id === jobId);
      if (job) {
        const newFavorites = [...favorite, job];
        setFavorites(newFavorites);
        localStorage.setItem('favoritos', JSON.stringify(newFavorites));
      }
    }
  };

  // Filtrar jobs de acordo com o estado de visualização
  const jobsToDisplay = showFavorites
    ? favorite // Apenas favoritos
    : jobs;

  const handleToggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center gap-7 w-full h-fit ">
      <Header
        onToggleShowFavorites={handleToggleShowFavorites}
        showFavorites={showFavorites}
      />
      <div className="flex px-24">
        <Filter />
      </div>
      <div className="flex px-24">
        <List
          cards={jobsToDisplay}
          favorite={favorite.map((job) => job.job_id)} // Lista de IDs dos cartões favoritos
          onToggleFavorite={toggleFavorite} //alternar favorito
        />
      </div>
    </div>
  );
}
