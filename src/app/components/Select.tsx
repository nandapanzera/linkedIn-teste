import { Dispatch, SetStateAction, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/className';

// Propriedades do Select
export interface SelectProps {
  item: string[];
  label: string;
  placeholder: string;
  selectedItems: string[]; // Assume que sempre será um array de strings
  setSelectedItems: Dispatch<SetStateAction<string[]>>; // Atualiza o estado no pai
  multiple?: boolean; // Define se permite múltiplas seleções
}

// Componente do Select
export function SelectBox({
  item,
  label,
  placeholder,
  selectedItems,
  setSelectedItems,
  multiple = false, // Por padrão, assume seleção única
}: SelectProps) {
  // Estado para controlar a abertura do dropdown
  const [open, setOpen] = useState(false);

  // Função para seleção, diferenciando múltipla ou única
  const toggleItemSelection = (option: string) => {
    if (multiple) {
      // Para múltipla seleção
      if (selectedItems.includes(option)) {
        setSelectedItems(selectedItems.filter((item) => item !== option));
      } else {
        setSelectedItems([...selectedItems, option]);
      }
    } else {
      // Para seleção única
      if (selectedItems[0] === option) {
        // Se a opção já está selecionada, desmarque
        setSelectedItems([]);
      } else {
        // Caso contrário, selecione a nova opção
        setSelectedItems([option]);
      }
      setOpen(false); // Fecha o dropdown após selecionar
    }
  };

  // Exibição de itens selecionados
  const displaySelectedItems = () => {
    if (multiple) {
      return selectedItems.length > 0
        ? selectedItems.map((selectedItem, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-violet-200 rounded-full text-sm"
            >
              {selectedItem}
            </span>
          ))
        : placeholder;
    } else {
      return selectedItems.length > 0 ? selectedItems[0] : placeholder;
    }
  };

  return (
    <div className="flex w-full h-fit flex-col justify-start">
      <div className="flex font-semibold text-dark-gray pb-2 text-base">
        {label}
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            className="flex px-4 py-2 w-full rounded-full border-2 border-light-gray"
            variant="outline"
          >
            <div className="flex gap-2 items-center w-full overflow-scroll">
              {displaySelectedItems()}
              <span className="text-text-gray text-base flex justify-between w-full items-center">
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full mt-2 border-2 border-light-gray rounded-lg max-h-60 overflow-y-auto">
          {item.map((option, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center p-2 cursor-pointer hover:bg-violet-300',
                multiple
                  ? selectedItems.includes(option) && 'bg-violet-200'
                  : selectedItems[0] === option && 'bg-violet-200'
              )}
              onClick={() => toggleItemSelection(option)}
            >
              {multiple && (
                <Checkbox
                  checked={selectedItems.includes(option)}
                  onCheckedChange={() => toggleItemSelection(option)}
                />
              )}
              <span className="ml-2">{option}</span>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
