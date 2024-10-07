'use client';
import { ButtonHTMLAttributes } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeart } from 'react-icons/io5';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FavoriteProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function FavoriteButton({ ...props }: FavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="flex h-fit w-fit justify-center focus:outline-none"
      {...props}
    >
      {isFavorite ? <IoHeart size={24} /> : <IoHeartOutline size={24} />}
    </button>
  );
}
