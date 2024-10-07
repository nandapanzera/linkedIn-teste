import { FavoriteButton } from './FavoriteButton';

export interface CardProps {
  title: string;
  children: string;
  company: string;
}

export function Card({ children, company, title }: CardProps) {
  return (
    <div className="bg-slate-50 flex flex-col w-fit justify-center align-middle p-8 gap-4 rounded-lg shadow-md shadow-medium-gray border-1 border-medium-gray">
      <div className="flex text-lg text-left justify-between align-middle flex-row text-dark-gray font-bold">
        {title}
        <FavoriteButton />
      </div>
      <div className="flex flex-col justify-start align-middle gap-2">
        <div className="flex text-base text-medium-gray font-semibold ">
          {company}
        </div>
        <div className="flex text-text-gray text-sm max-w-[240px] text-balance">
          {children}
        </div>
      </div>
    </div>
  );
}
