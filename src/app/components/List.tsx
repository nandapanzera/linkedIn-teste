import { Card } from './Card';
export interface ListProps {
  cards: { company: string; title: string; description: string }[]; // Estrutura dos cartões
}

export function List({ cards }: ListProps) {
  return (
    <div className="grid grid-cols-4 gap-8 max-h-[680px] overflow-scroll pr-8 pb-2">
      {cards.map((card, index) => (
        <div key={index}>
          <Card company={card.company} title={card.title}>
            {card.description}
          </Card>
        </div>
      ))}
    </div>
  );
}
