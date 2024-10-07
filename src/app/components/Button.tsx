import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <div className="flex w-fit justify-center gap-2 align-middle">
      <button
        className="relative flex font-semibold h-fit w-fit justify-center rounded-full bg-button-purple px-5 py-2 text-zinc-50 hover:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-900 active:bg-violet-800"
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
