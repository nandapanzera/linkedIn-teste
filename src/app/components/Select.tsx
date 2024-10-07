'use client';
import { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  item: string[];
  label: string;
}

export function SelectBox({ item, label, ...props }: SelectProps) {
  return (
    <div className="flex justify-start flex-col gap-2">
      <div className="flex text-left text-dark-gray text-sm font-semibold">
        {label}
      </div>
      <select
        multiple
        className="flex flex-row appearance-none rounded-full bg-transparent w-fit px-5 py-2 text-text-gray border border-text-gray"
        {...props}
      >
        {item.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
