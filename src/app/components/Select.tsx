'use client';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { cn } from '@/utils/className';

export interface SelectProps {
  item: string[];
  label: string;
  placeholder: string;
}

export function SelectBox({ item, label, placeholder }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Função para selecionar/remover itens
  const toggleItemSelection = (option: string) => {
    if (selectedItems.includes(option)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== option)
      );
    } else {
      setSelectedItems((prevItems) => [...prevItems, option]);
    }
  };

  return (
    <div className="flex w-full h-fit flex-col justify-start">
      <div className="flex font-semibold text-dark-gray pb-2 text-base">
        {label}
      </div>
      {/* Div principal onde os itens selecionados serão exibidos */}
      <div
        className="flex px-4 py-2 w-full rounded-full border-2 border-light-gray cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex w-fit overflow-scroll">
          <div className="flex gap-2 items-center align-middle">
            {/* Exibe os itens selecionados */}
            {selectedItems.length > 0 ? (
              selectedItems.map((selectedItem, index) => (
                <span
                  key={index}
                  className="flex px-2 py-1 w-fit flex-row flex-nowrap text-nowrap bg-violet-200 rounded-full text-sm"
                >
                  {selectedItem}
                </span>
              ))
            ) : (
              <span className="flex text-text-gray text-base flex-row justify-between w-full items-center">
                {placeholder}
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span> // Mensagem de placeholder quando não há itens selecionados
            )}
          </div>
        </div>
      </div>

      {/* Dropdown com as opções */}
      {open && (
        <div className="flex flex-col w-full mt-2 border-2 border-light-gray rounded-lg">
          {item.map((option, index) => (
            <div
              key={index}
              className={cn(
                'p-2 cursor-pointer hover:bg-violet-300',
                selectedItems.includes(option) && 'bg-violet-200'
              )}
              onClick={() => toggleItemSelection(option)} // Alterna a seleção do item
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
