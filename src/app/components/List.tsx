import { Job, useJobs } from '@/context/jobsData';
import { Card } from './Card';
export interface ListProps {
  cards: Job[]; // Estrutura dos cartões
}

export function List({ cards }: ListProps) {
  const { loading } = useJobs();

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <span>Loading...</span> {/* Exibir mensagem de loading */}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-8 max-h-[680px] overflow-scroll pr-8 pb-2">
      {cards.map((card, index) => (
        <div key={index}>
          <Card company={card.location} title={card.title}>
            {card.job_skills.map((skill, index) => (
              <span key={index} className="text-sm text-dark-gray">
                {skill.skill_name}{' '}
              </span>
            ))}
            {card.salaries.map((salary, index) => (
              <span key={index} className="text-sm text-dark-gray">
                {salary.currency} {salary.min_salary} - {salary.max_salary}{' '}
                {salary.pay_period}
              </span>
            ))}
          </Card>
        </div>
      ))}
    </div>
  );
}
