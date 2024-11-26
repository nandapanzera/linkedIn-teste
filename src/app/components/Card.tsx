'use client';
import { ReactNode } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeart } from 'react-icons/io5';
import { Button } from './Button';

// Propriedades do card
export interface CardProps {
  title: string;
  children: ReactNode;
  company: string;
  isFavorite: boolean;
  contact?: string;
  onToggleFavorite: () => void; // alternar favorito
}

// Componente do card
export function Card({
  children,
  company,
  title,
  contact,
  isFavorite,
  onToggleFavorite,
}: CardProps) {
  return (
    <div className="bg-slate-50 flex flex-col h-full w-full justify-between align-middle p-8 gap-4 rounded-lg shadow-md shadow-medium-gray border-1 border-medium-gray">
      <div className="flex text-lg text-left justify-between align-middle flex-row text-dark-gray font-bold">
        {title}
        <button
          onClick={onToggleFavorite}
          className="flex h-fit w-fit justify-center focus:outline-none"
        >
          {isFavorite ? <IoHeart size={24} /> : <IoHeartOutline size={24} />}
        </button>
      </div>
      <div className="flex flex-col justify-start align-middle gap-2">
        <div className="flex text-base text-medium-gray font-semibold ">
          {company}
        </div>
        <div className="flex flex-col text-text-gray text-sm max-w-[240px] text-balance">
          {children}
        </div>
      </div>
      <Button>
        <a
          href={`mailto:${contact}?Subject=Vaga%20de%20Emprego&body=Olá,%0A%0ATenho interesse na vaga...`}
          className="flex w-fit h-fit text-base"
        >
          Entrar em contato
        </a>
      </Button>
    </div>
  );
}
