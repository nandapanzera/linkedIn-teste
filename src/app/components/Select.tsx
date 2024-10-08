'use client';

import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            className="flex px-4 py-2 w-full rounded-full border-2 border-light-gray"
            variant="outline"
          >
            <div className="flex gap-2 items-center w-full overflow-scroll">
              {/* Exibe os itens selecionados */}
              {selectedItems.length > 0 ? (
                selectedItems.map((selectedItem, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-violet-200 rounded-full text-sm"
                  >
                    {selectedItem}
                  </span>
                ))
              ) : (
                <span className="text-text-gray text-base flex justify-between w-full items-center">
                  {placeholder}
                  {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              )}
            </div>
          </Button>
        </PopoverTrigger>

        {/* Dropdown com as opções */}
        <PopoverContent className="w-full mt-2 border-2 border-light-gray rounded-lg">
          {item.map((option, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center p-2 cursor-pointer hover:bg-violet-300',
                selectedItems.includes(option) && 'bg-violet-200'
              )}
              onClick={() => toggleItemSelection(option)}
            >
              <Checkbox
                checked={selectedItems.includes(option)}
                onCheckedChange={() => toggleItemSelection(option)}
              />
              <span className="ml-2">{option}</span>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
