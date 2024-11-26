import { Job } from '@/context/jobsData';
import { Card } from './Card';

// Props do componente List
export interface ListProps {
  cards: Job[];
  favorite: number[]; // Lista de IDs dos cartões favoritos
  onToggleFavorite: (jobId: number) => void; // alternar favorito
}

// Componente de lista de cards
export function List({ cards, favorite, onToggleFavorite }: ListProps) {
  // const { loading, loaded } = useJobs();

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center w-full h-full">
  //       <span>Loading...</span> {/* Exibir mensagem de loading */}
  //     </div>
  //   );
  // }

  // if (loaded) {
  return (
    <div className="justify-center items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-h-[680px] overflow-scroll pb-2">
      {cards.map((card, index) => (
        <div key={index}>
          <Card
            isFavorite={favorite.includes(card.job_id)} // Verifica se é favorito
            onToggleFavorite={() => onToggleFavorite(card.job_id)} // Passa a função para alternar favorito
            company={card.location}
            title={card.title}
          >
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
  // }
}
