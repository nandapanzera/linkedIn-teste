'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { VariableSizeList as List } from 'react-window'; // Biblioteca para virtual scrolling

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export interface ComboboxProps {
  items: string[];
  label: string;
  placeholder: string;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  multiple?: boolean;
}

export function Combobox({
  items,
  label,
  placeholder,
  selectedItems,
  setSelectedItems,
  multiple = false,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [dropdownWidth, setDropdownWidth] = React.useState(200);

  // Refs para calcular largura do combobox
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      const maxItemWidth = Math.max(
        ...items.map((item) => item.length * 8), // Aproximação: 8px por caractere
        200 // Largura mínima
      );
      setDropdownWidth(maxItemWidth);
    }
  }, [items]);

  const toggleItemSelection = (value: string) => {
    if (multiple) {
      if (selectedItems.includes(value)) {
        setSelectedItems(selectedItems.filter((item) => item !== value));
      } else {
        setSelectedItems([...selectedItems, value]);
      }
    } else {
      setSelectedItems(selectedItems[0] === value ? [] : [value]);
      setOpen(false);
    }
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // Virtualization for performance
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const item = filteredItems[index];
    return (
      <div style={style}>
        <CommandItem
          key={item}
          value={item}
          onSelect={() => toggleItemSelection(item)}
        >
          <Check
            className={cn(
              'mr-2 h-4 w-4',
              selectedItems.includes(item) ? 'opacity-100' : 'opacity-0'
            )}
          />
          {item}
        </CommandItem>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col">
      <label className="font-semibold text-dark-gray pb-2">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={buttonRef}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedItems.length > 0
              ? multiple
                ? selectedItems.join(', ')
                : selectedItems[0]
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" style={{ minWidth: dropdownWidth }}>
          <Command>
            <CommandInput
              placeholder="Search..."
              value={search}
              onValueChange={setSearch}
            />
            <CommandList>
              {filteredItems.length > 0 ? (
                <CommandGroup>
                  <List
                    height={200} // Altura do dropdown visível
                    itemCount={filteredItems.length}
                    itemSize={() => 40} // Altura de cada item
                    width="100%"
                  >
                    {Row}
                  </List>
                </CommandGroup>
              ) : (
                <CommandEmpty>No results found.</CommandEmpty>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
